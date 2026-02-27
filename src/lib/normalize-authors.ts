export function normalizeAuthors(authors: string) {
  const rawResponse = authors;
  const semiClean = rawResponse.trim().slice(1, -1);
  const jsonStrings = semiClean.split('","').map((s) => {
    return s.replace(/^"/, '').replace(/"$/, '').replace(/\\"/g, '"');
  });
  const normalizedAuthors = jsonStrings
    .map((str) => {
      try {
        const obj = JSON.parse(str);
        return obj._;
      } catch (e) {
        return null;
      }
    })
    .filter(Boolean);

  return normalizedAuthors.join(' and ') || authors;
}
