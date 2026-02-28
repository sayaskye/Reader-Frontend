import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from '@/hooks';

export interface LibraryFilters {
  search: string;
  status: string;
  genre: string;
  isFavorite: boolean;
  [key: string]: any;
}

export const useBookFilters = () => {
  const form = useForm<LibraryFilters>({
    defaultValues: {
      search: '',
      status: 'all',
      genre: 'all',
      isFavorite: false,
    },
  });
  const resetFilters = () => {
    setSearchTerm('');
    form.reset({
      search: '',
      status: 'all',
      isFavorite: false,
    });
  };

  const { watch, setValue } = form;

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    setValue('search', debouncedSearch);
  }, [debouncedSearch, setValue]);

  const currentFilters = watch();

  return {
    form,
    searchTerm,
    setSearchTerm,
    currentFilters,
    resetFilters,
  };
};
