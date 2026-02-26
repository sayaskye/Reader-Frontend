/// <reference lib="webworker" />
import { precacheAndRoute } from 'workbox-precaching';
import { openDB } from 'idb';
import JSZip from 'jszip';
import { clientsClaim } from 'workbox-core';

declare let self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: any;
};

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  clientsClaim();
  event.waitUntil(self.clients.claim());
});

precacheAndRoute(self.__WB_MANIFEST);

let zip: JSZip | null = null;
let currentBookId: string | null = null;

async function loadBook(bookId: string) {
  currentBookId = bookId;
  const db = await openDB('Library', 1);
  const book = await db.get('books', bookId);
  if (!book?.fileBlob) return;
  zip = await JSZip.loadAsync(book.fileBlob);
}

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SET_BOOK') {
    event.waitUntil(loadBook(event.data.bookId));
  }
});

self.addEventListener('fetch', (event: FetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname.includes('/epub-content/')) {
    event.respondWith(handleEpubRequest(event));
  }
});

async function handleEpubRequest(event: FetchEvent): Promise<Response> {
  const url = new URL(event.request.url);
  const pathParts = url.pathname.split('/epub-content/')[1].split('/');
  const bookIdFromUrl = pathParts[0];
  const relativePath = decodeURIComponent(pathParts.slice(1).join('/'));

  if (!zip || currentBookId !== bookIdFromUrl) {
    await loadBook(bookIdFromUrl);
  }

  if (!zip) return new Response('No zip', { status: 500 });

  try {
    const file = zip.file(relativePath);
    if (!file) return new Response('Not Found', { status: 404 });

    const blob = await file.async('blob');
    return new Response(blob, {
      headers: {
        'Content-Type': getMimeType(relativePath),
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new Response('SW error', { status: 500 });
  }
}

function getMimeType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();

  switch (ext) {
    case 'html':
    case 'xhtml':
      return 'application/xhtml+xml';

    case 'css':
      return 'text/css';

    case 'js':
      return 'application/javascript';

    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';

    case 'png':
      return 'image/png';

    case 'svg':
      return 'image/svg+xml';

    case 'woff':
      return 'font/woff';

    case 'woff2':
      return 'font/woff2';

    case 'opf':
    case 'ncx':
    case 'xml':
      return 'application/xml';

    default:
      return 'application/octet-stream';
  }
}
