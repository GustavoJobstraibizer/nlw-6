import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextProps = {
  children: ReactNode;
};

type ThemeContextType = {
  currentTheme: string;
  toggleTheme: () => void;
};

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") ?? "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);

    document.querySelector("body")?.removeAttribute("class");
    document.querySelector("body")?.classList.add(currentTheme);
  }, [currentTheme]);

  function toggleTheme() {
    setCurrentTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext({} as ThemeContextType);
