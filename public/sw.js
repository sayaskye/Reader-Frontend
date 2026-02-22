import { openDB } from 'idb';
import JSZip from 'jszip';

let zip = null;
let currentBookId = null;

self.addEventListener('message', async (event) => {
  if (event.data.type === 'SET_BOOK') {
    currentBookId = event.data.bookId;
    const db = await openDB('Library', 1);
    const book = await db.get('books', currentBookId);
    zip = await JSZip.loadAsync(book.fileBlob);
    console.log('Service Worker: Book loaded and ready');
  }
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.includes('/epub-content/')) {
    event.respondWith(handleEpubRequest(url.pathname));
  }
});

async function handleEpubRequest(pathname) {
  if (!zip) return fetch(pathname);
  const relativePath = pathname.split('/epub-content/')[1];

  try {
    const file = zip.file(relativePath);
    if (!file) return new Response('Not Found', { status: 404 });
    const blob = await file.async('blob');
    const type = getMimeType(relativePath);
    return new Response(blob, {
      headers: { 'Content-Type': type },
    });
  } catch (e) {
    return new Response('Error extracting file', { status: 500 });
  }
}

function getMimeType(path) {
  if (path.endsWith('.html')) return 'text/html';
  if (path.endsWith('.css')) return 'text/css';
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
  if (path.endsWith('.png')) return 'image/png';
  return 'application/octet-stream';
}
