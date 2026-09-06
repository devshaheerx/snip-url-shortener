import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-ink bg-surface hover:-translate-y-0.5 transition-transform"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-volt" />
      ) : (
        <Moon size={18} className="text-ink" />
      )}
    </button>
  );
}
