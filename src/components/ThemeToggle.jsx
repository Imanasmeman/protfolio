// components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';


const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
