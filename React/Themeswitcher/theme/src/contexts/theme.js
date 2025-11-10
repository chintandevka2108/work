import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light", // ✅ lowercase to match usage
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // ✅ capital P

export default function useTheme() {
  return useContext(ThemeContext);
}
