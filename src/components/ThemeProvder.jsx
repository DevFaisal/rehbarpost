import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function ThemeProvider() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (theme === "dark") {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleThemeToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <IoSunny className="text-yellow-500" />
      ) : (
        <IoMoon className="text-gray-800" />
      )}
    </button>
  );
}

export default ThemeProvider;
