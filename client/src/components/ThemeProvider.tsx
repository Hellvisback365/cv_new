import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the allowed theme types
type Theme = 'dark' | 'light';

// Define what will be stored in the context
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with a meaningful default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {
    console.warn('ThemeProvider not found');
  }
});

// Custom hook for using the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context;
};

// Props type for the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Default to dark theme
  const [theme, setTheme] = useState<Theme>('dark');

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme && (storedTheme === 'dark' || storedTheme === 'light')) {
        setTheme(storedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // If no stored theme but user prefers light mode
        setTheme('light');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Apply theme class to document when theme changes
  useEffect(() => {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
    
    // Store theme preference
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Return the provider with the context value
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
