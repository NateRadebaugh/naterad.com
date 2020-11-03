import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemePicker.module.scss";

function ThemePicker() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  function toggle() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
