// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

// --- Icons defined outside the component to prevent re-creation on render ---
const LightModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 theme-toggle-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const DarkModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 theme-toggle-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const ThemeToggle = ({ className = "" }) => {
  // 1. Initialize state to `null`. This is the key to the fix.
  const [theme, setTheme] = useState(null);

  // 2. On mount, this useEffect syncs the component's state
  // with the actual theme determined by the inline script.
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.style.colorScheme = newTheme;
  };

  // 3. Don't render anything until the theme has been determined.
  // This prevents the initial render of the wrong icon.
  if (theme === null) {
    // We render an empty div with the same size as the button
    // to prevent layout shift when the real button loads in.
    return <div className="h-10 w-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${className} theme-toggle bg-transparent border-none cursor-pointer p-2 transition-colors`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Now this will only render the correct icon */}
      {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default ThemeToggle;
