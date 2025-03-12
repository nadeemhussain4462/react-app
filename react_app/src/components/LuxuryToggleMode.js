import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import "./LuxuryToggleMode.css";

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

function LuxuryToggleMode() {
  // State for theme
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("luxuryTheme");
    return saved === "dark";
  });

  // Refs for GSAP animations
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // On mount, animate container + heading
    gsap.from(containerRef.current, {
      duration: 1.2,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(headingRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      ease: "back.out(1.7)",
      delay: 0.5,
    });

    gsap.from(buttonRef.current, {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  // Save to localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("luxuryTheme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Handle container 3D tilt on mouse move
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    // Mouse position from center
    const rotateY = (innerWidth / 2 - e.clientX) * 0.02;
    const rotateX = (innerHeight / 2 - e.clientY) * 0.02;

    gsap.to(containerRef.current, {
      duration: 0.5,
      rotationY: rotateY,
      rotationX: rotateX,
      transformPerspective: 800,
      transformOrigin: "center",
    });
  };

  return (
    <div
      ref={containerRef}
      className={`luxury-container ${darkMode ? "dark" : "light"}`}
      onMouseMove={handleMouseMove}
    >
      <h2 ref={headingRef} className="luxury-heading">
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h2>
      <button
        ref={buttonRef}
        className="luxury-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default LuxuryToggleMode;
