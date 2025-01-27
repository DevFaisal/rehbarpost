import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function ThemeProvider() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    if (theme == "dark") {
      const theme = document.querySelector("html")?.classList.add("dark");
    } else {
      const theme = document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleTheme}>
      {theme == "light" && <IoSunny className="text-white" />}
      {theme == "dark" && <IoMoon className="text-black" />}
    </button>
  );
}

export default ThemeProvider;
