export function createEntityKeys<TFilters = Record<string, unknown>>(
  entity: string,
) {
  return {
    all: [entity] as const,
    lists: () => [entity, 'list'] as const,
    list: (filters?: TFilters) => [entity, 'list', { ...filters }] as const,
    details: () => [entity, 'detail'] as const,
    detail: (id: string | number) => [entity, 'detail', id] as const,
  };
}

export const authKeys = createEntityKeys('auth');
export const booksKeys = createEntityKeys('books');
