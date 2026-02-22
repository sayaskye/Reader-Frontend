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
  getBook: async (id: string): Promise<any | null> => {
    const db = await dbPromise;
    return await db.get(STORE_NAME, id);
  },

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

  deleteBook: async (id: string): Promise<void> => {
    const db = await dbPromise;
    await db.delete(STORE_NAME, id);
  },
};
