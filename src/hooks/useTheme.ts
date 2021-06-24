import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return { currentTheme, toggleTheme };
}
