export interface UserBooks {
  userBooks: UserBook[];
}

export interface UserBook {
  id: string;
  userId: string;
  bookId: string;
  status: string;
  lastPosition: number;
  totalPages: null;
  isFavorite: boolean;
  dateAddedAt: Date;
  lastReadAt: Date | null;
  finishedAt: null;
  updatedAt: Date | null;
  deletedAt: null;
  book: Book;
}

export interface Book {
  id: string;
  url: string;
  coverUrl: string;
  title: string;
  author: string;
  language: string;
  publisher: string;
  description: string;
  tableOfContents: TableOfContent[];
  fileSize: number;
  filename: string;
  fileHash: string;
}

export interface TableOfContent {
  href: string;
  title: string;
}
