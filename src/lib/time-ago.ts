export function formatRelativeTime(
  date: Date | string | number | null,
): string {
  if (!date) return '';
  const now = new Date().getTime();
  const then = new Date(date).getTime();
  const diffInSeconds = Math.floor((then - now) / 1000);

  const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ];

  for (const { unit, seconds } of units) {
    if (Math.abs(diffInSeconds) >= seconds || unit === 'second') {
      const value = Math.round(diffInSeconds / seconds);

      const formatter = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto',
      });

      return formatter.format(value, unit);
    }
  }

  return 'now';
}
