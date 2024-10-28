// In React haben wir oft eine Hierarchie von Komponenten, bei denen eine Parent-Komponente Daten an eine Child-Komponente übergibt.
// Das ist manchmal jedoch unpraktisch, vor allem wenn viele Zwischenkomponenten diese Daten nur durchreichen müssen.
// Der useContext Hook hilft dabei, indem er diesen Props-Drilling-Prozess vermeidet und ermöglicht, dass Daten zentral bereitgestellt werden können.
'use client'
import { createContext, useState } from "react";

// 1. Erstellen des ThemeContext
// ThemeContext ist unser Context-Objekt. Es wird mit createContext() erstellt.
export const ThemeContext = createContext({});

// 2. Erstelllen eines Theme-Providers, der den Wert für den ThemeContext bereitstellt
// Der ThemeProvider ist eine Komponente, die den ThemeContext.Provider umschließt und Werte (theme und toggleTheme) an alle Child-Komponenten übergibt.
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme ] = useState('dark');

    // Funktion zum Toggle des Themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // 3.Den Context Provider mit einem Wert bereitstellen
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === 'light' ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-900 text-slate-50'}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}