import { createContext, useContext, useState, useEffect } from 'react';
import { THEMES, THEME_STORAGE_KEY } from './themeData';

const ThemeContext = createContext({
  currentTheme: 'default',
  setTheme: () => {},
  availableThemes: Object.values(THEMES),
  themeDetails: THEMES.default,
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES[saved]) {
        return saved;
      }
    } catch {
      // localStorage may not be available (e.g. private mode or SSR)
    }
    return 'default';
  });

  const setTheme = (themeId) => {
    if (!THEMES[themeId]) return;
    setCurrentThemeState(themeId);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeId);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const value = {
    currentTheme,
    setTheme,
    availableThemes: Object.values(THEMES),
    themeDetails: THEMES[currentTheme] || THEMES.default,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
