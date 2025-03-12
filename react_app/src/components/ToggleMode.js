// import React, { useState } from "react";

// function ToggleButton() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div
//       style={{
//         background: darkMode ? "black" : "white",
//         color: darkMode ? "white" : "black",
//         padding: "20px",
//         textAlign: "center",
//       }}
//     >
//       <h2>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
//       <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
//     </div>
//   );
// }
// export default ToggleButton;


import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ToggleMode.css";

function ToggleMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const containerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // GSAP initial animation
    gsap.from(containerRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Icon bounce animation on theme toggle
    gsap.fromTo(
      iconRef.current,
      { scale: 0.5, rotation: -20 },
      { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" }
    );
  }, [darkMode]);

  return (
    <div
      ref={containerRef}
      className={`container ${darkMode ? "dark" : "light"}`}
    >
      <h2 ref={iconRef}>
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h2>
      <button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default ToggleMode;

