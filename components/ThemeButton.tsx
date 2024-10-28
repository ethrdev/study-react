'use client'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Siehe ThemeContext.tsx für den ersten Teil der Kontext-Erstellung

export default function ThemeButton() {
    // 4. Zugriff auf den Kontextwert mit useContext
    // useContext(ThemeContext) greift auf das ThemeContext-Objekt zu und erhält den aktuellen Theme-Wert und die toggleTheme-Funktion
    const { theme, toggleTheme } = useContext(ThemeContext) as { theme: string; toggleTheme: () => void };

    return (
        // Der Button nutzt die toggleTheme-Funktion, um das Theme zu wechseln
        <button onClick={toggleTheme}>
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </button>
    )
}