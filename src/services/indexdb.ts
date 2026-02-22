import { openDB } from 'idb';
import type { saveBookProps } from '@/types/indexdb';

const DB_NAME = 'Library';
const STORE_NAME = 'books';
const VERSION = 1;

const dbPromise = openDB(DB_NAME, VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    }
  },
});

export const indexdbService = {
  saveBook: async ({
    id,
    fileBlob,
    metadata,
  }: saveBookProps): Promise<void> => {
    try {
      const db = await dbPromise;
      await db.put(STORE_NAME, {
        id,
        fileBlob,
        ...metadata,
      });
      console.log(`Book ${id} saved offline.`);
    } catch (error) {
      console.error('Error while saving in IndexedDB:', error);
      throw error;
    }
  },

  getBookUrl: async (id: string): Promise<string | null> => {
    try {
      const db = await dbPromise;
      const book = await db.get(STORE_NAME, id);

      if (book && book.fileBlob) {
        return URL.createObjectURL(book.fileBlob);
      }
      return null;
    } catch (error) {
      console.error('Error owhile fetching book from IndexedDB:', error);
      return null;
    }
  },

  deleteBook: async (id: string): Promise<void> => {
    const db = await dbPromise;
    await db.delete(STORE_NAME, id);
  },
};
