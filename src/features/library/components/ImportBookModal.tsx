import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Upload, FileText, X, Loader2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { importBookSchema, type ImportBookValues } from '@/schemas';

interface ImportBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (data: ImportBookValues) => Promise<void>;
}

export const ImportBookModal = ({
  isOpen,
  onClose,
  onUpload,
}: ImportBookModalProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewName, setPreviewName] = useState<string | null>(null);

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ImportBookValues>({
    resolver: zodResolver(importBookSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('file', file);
      setPreviewName(file.name);
    }
  };

  const onSubmit = async (data: ImportBookValues) => {
    setIsUploading(true);
    try {
      await onUpload(data);
      handleClose();
    } catch (error) {
      console.error('Upload failed', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    reset();
    setPreviewName(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass-panel border-none sm:max-w-100">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Import New Book
          </DialogTitle>
          <DialogDescription>
            Upload your EPUB files to add them to your personal library.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-4">
          <div
            className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 transition-colors ${
              errors.file
                ? 'border-destructive/50 bg-destructive/5'
                : 'border-foreground/10 bg-secondary/30 hover:bg-secondary/50'
            }`}
          >
            <input
              type="file"
              accept=".epub"
              className="absolute inset-0 z-10 cursor-pointer opacity-0"
              onChange={handleFileChange}
              disabled={isUploading}
            />

            {previewName ? (
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary mb-3 rounded-full p-3">
                  <FileText size={32} />
                </div>
                <p className="max-w-50 truncate text-sm font-medium">
                  {previewName}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground mt-2 cursor-pointer text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewName(null);
                  }}
                >
                  <X size={12} className="mr-1" /> Remove
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <div className="bg-foreground/5 mb-3 rounded-full p-3">
                  <Upload size={32} className="text-foreground/40" />
                </div>
                <p className="text-sm font-medium">Click or drag to upload</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  EPUB files only (max 50MB)
                </p>
              </div>
            )}
          </div>

          {errors.file && (
            <p className="text-destructive text-xs font-medium">
              {errors.file.message as string}
            </p>
          )}

          <div className="flex justify-end gap-3">
            <Button
              className="cursor-pointer"
              type="button"
              variant="ghost"
              onClick={handleClose}
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!previewName || isUploading}
              className="bg-primary text-background hover:bg-primary/90 cursor-pointer px-8 font-bold"
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                'Import Book'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
