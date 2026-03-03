import { useEffect } from 'react';
import { useThemeStore } from '@/store/theme';

export const ThemeInitializer = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.className = theme;
  }, [theme]);

  return null;
};
