import { useTheme } from "../../hooks/useTheme";
import "./styles.scss";

export function ToggleTheme() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <>
      <button className="toggle-btn" onClick={toggleTheme}>
        <span
          className="toggle"
          style={{
            transform:
              currentTheme === "dark"
                ? "translateX(calc(4rem - 100%))"
                : "translateX(0)",
          }}
        ></span>
      </button>
    </>
  );
}
