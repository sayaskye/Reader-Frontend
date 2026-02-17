import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    const allThemes: Theme[] = ['dark', 'light'];

    root.classList.remove(...allThemes);

    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return { theme, applyTheme };
};
