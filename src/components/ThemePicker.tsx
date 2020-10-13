import { useTheme } from "next-themes";
import styles from "./ThemePicker.module.scss";

function ThemePicker() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggle() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <button className={styles.themePicker} onClick={() => toggle()}>
      {resolvedTheme === "dark" ? (
        <>
          🌙 <span>Set light theme</span>
        </>
      ) : (
        <>
          ☀️ <span>Set dark theme</span>
        </>
      )}
    </button>
  );
}

export default ThemePicker;
