// src/components/ThemeToggle.tsx
'use client';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
