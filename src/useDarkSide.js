import { useCallback, useState } from "react";

const getInitialColorMode = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("color-mode") || "light";
  }
  return "light";
};

export const useDarkSide = () => {
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  const setMode = useCallback((mode) => {
    window.localStorage.setItem("color-mode", mode);
    setColorMode(mode);
  }, []);

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  }, [setMode]);

  return [colorMode, toggleColorMode];
};