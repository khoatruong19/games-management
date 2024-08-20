import createContext from "@/lib/context";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderValues = {
  theme: Theme;
  isDarkTheme: boolean;
  setTheme: (theme: Theme) => void;
};

const initialValues: ThemeProviderValues = {
  theme: "light",
  isDarkTheme: false,
  setTheme: () => null,
};

const [Provider, useTheme] = createContext<ThemeProviderValues>({
  initialValues,
  name: "ThemeProvider",
  strict: true,
  errorMessage: "useTheme must be used within a ThemeProvider",
});

export { useTheme };

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    isDarkTheme: theme === "dark",
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <Provider {...props} value={value}>
      {children}
    </Provider>
  );
}
