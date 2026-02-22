export interface TableOfContent {
  title?: string;
  href?: string;
}

export interface BookMetadata {
  id?: string;
  url?: string;
  coverUrl?: string;
  title?: string;
  author?: string;
  language?: string;
  publisher?: string;
  description?: string;
  tableOfContents?: TableOfContent;
  fileSize?: number;
  filename?: string;
  fileHash?: string;
  uploadedAt?: Date;
  deletedAt?: Date;
}

export interface saveBookProps {
  id?: string;
  fileBlob?: Blob;
  metadata?: BookMetadata;
}
