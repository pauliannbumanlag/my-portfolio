import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = ({ colorMode, toggleColorMode }) => {
  return (
    <div>
      <DarkModeSwitch
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        size={24}
      />
    </div>
  );
};

export default Switcher;