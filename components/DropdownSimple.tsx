"use client";

import { useState } from "react";

// Es gibt verschiedene Möglichkeiten Dropdowns zu erstellen 
// Die grundlegende Variante besteht darin die Dropdown-Optionen abhängig von einem State zu zeigen oder zu verstecken

export default function DropdownSimple () {

    // State, um das Dropdown-Menü zu zeigen oder zu verstecken
    // Wir initialisieren den State isOpen mit dem Wert false.
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState("Option 1");

    // Funktion, um das Dropdown-Menü zu öffnen oder zu schließen
    // Diese Funktion toggelt den Wert von isOpen zwischen true und false.
    // Sie wird aufgerufen, wenn der Button gedrückt wird.
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Die Funktion selectOption wird aufgerufen, wenn eine Option ausgewählt wird.
    // Sie setzt die ausgewählte Option in den State und schließt das Dropdown-Menü.
    const selectOption = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    
    return (
        <>
        <div className="relative inline-block text-left">
            {/* Das Dropdown-Menü öffnet sich, wenn der Button gedrückt wird, da der onClick-Handler die Funktion toggleDropdown aufruft */}
            <button className="bg-slate-800 p-2 rounded-md" onClick={toggleDropdown}>
                {/* Der Button zeigt die ausgewählte Option an, falls eine vorhanden ist. Falls nicht, wird "Menu" angezeigt */}
                {selectedOption ? selectedOption : "Menu"}
            </button>

        {/* Das Dropdown-Menü wird nur gerendert, wenn isOpen true ist */}
        {/* Dies erreichen wir mit der Bedingung isOpen && */}
        {isOpen && (
            <ul className="block absolute bg-slate-800 z-1 p-2 rounded-md">
                <li className="hover:bg-slate-700 p-2 rounded-md cursor-pointer" onClick={() => selectOption("Option 1")}>Option 1</li>
                <li className="hover:bg-slate-700 p-2 rounded-md cursor-pointer" onClick={() => selectOption("Option 2")}>Option 2</li>
                <li className="hover:bg-slate-700 p-2 rounded-md cursor-pointer" onClick={() => selectOption("Option 3")}>Option 3</li>
            </ul>
        )}
        </div>
        </>
    );
}