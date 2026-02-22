import * as JSZip from 'jszip';

export class readerService {
  static async extractEpubData(fileData: ArrayBuffer | Blob) {
    const zip = await JSZip.loadAsync(fileData);

    // 1. Get OPF
    const containerXml = await zip
      .file('META-INF/container.xml')
      ?.async('string');
    if (!containerXml) throw new Error('Invalid EPUB');

    const parser = new DOMParser();
    const containerDoc = parser.parseFromString(containerXml, 'text/xml');
    const opfPath = containerDoc
      .querySelector('rootfile')
      ?.getAttribute('full-path');

    if (!opfPath) throw new Error('No OPF file found');

    // 2.Read OPF
    const opfXml = await zip.file(opfPath)?.async('string');
    const opfDoc = parser.parseFromString(opfXml!, 'text/xml');

    // 3.Metadata
    const metadata = {
      title: opfDoc.querySelector('title')?.textContent || 'Unknown',
      author: opfDoc.querySelector('creator')?.textContent || 'Unknown',
      language: opfDoc.querySelector('language')?.textContent || 'en',
    };

    // 4.(Cover)
    const manifestItems = Array.from(opfDoc.querySelectorAll('item'));
    const coverItem = manifestItems.find(
      (item) =>
        item.getAttribute('properties')?.includes('cover-image') ||
        item.getAttribute('id')?.toLowerCase().includes('cover'),
    );

    let coverUrl = null;
    let coverBlob = null;
    if (coverItem) {
      const relPath = coverItem.getAttribute('href');
      const fullPath = this.resolveZipPath(opfPath, relPath!);
      coverBlob = await zip.file(fullPath)?.async('blob');
      if (coverBlob) {
        // This creates a temporal URL to use in <img>
        coverUrl = URL.createObjectURL(coverBlob);
      }
    }

    const spineIds = Array.from(opfDoc.querySelectorAll('spine itemref')).map(
      (item) => item.getAttribute('idref'),
    );
    const manifest = Array.from(opfDoc.querySelectorAll('manifest item'));
    const readingOrder = spineIds.map((id) => {
      const item = manifest.find((m) => m.getAttribute('id') === id);
      return item?.getAttribute('href');
    });
    const order = {
      spineIds,
      manifest,
      readingOrder,
    };

    return { metadata, coverUrl, coverBlob, opfPath, opfDoc, zip, order };
  }

  private static resolveZipPath(opfPath: string, href: string): string {
    const basePath = opfPath.split('/').slice(0, -1);
    const hrefParts = href.split('/');
    const finalPath = [...basePath];
    for (const part of hrefParts) {
      if (part === '..') finalPath.pop();
      else if (part !== '.' && part !== '') finalPath.push(part);
    }
    return finalPath.join('/');
  }
}
