export const getChapterTitle = (title: any): string => {
  if (typeof title === 'string') return title;
  if (!title || typeof title !== 'object') return 'Untitled';

  // Filtramos los metadatos de XML ($)
  const contentKey = Object.keys(title).find((key) => key !== '$');

  if (contentKey) {
    const content = title[contentKey];
    return typeof content === 'string' ? content : content?._ || 'Untitled';
  }

  return 'Untitled';
};
