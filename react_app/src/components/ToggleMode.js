import React, { useState } from "react";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
    </div>
  );
}
export default ToggleButton;