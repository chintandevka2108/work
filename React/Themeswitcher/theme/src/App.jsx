import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme"; // ✅ Correct import
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark"); // remove old
    html.classList.add(themeMode); // ✅ add new
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
