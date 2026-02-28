import * as z from 'zod';

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['application/epub+zip'];

export const importBookSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 50MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      'Only .epub files are accepted.',
    ),
});

export type ImportBookValues = z.infer<typeof importBookSchema>;
