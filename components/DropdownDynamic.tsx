// Manchmmal sind die Dropdown-Optionen nicht festgelegt, sondern kommen aus einer API oder einer Datenbank
// In diesem Fall können wir eine Array map() Methode verwenden um die Optionen dynamisch zu rendern

'use client';

import { useState } from "react";

export default function DropdownDynamic({ products }: { products: any[] }) {

    // State, um das Dropdown-Menü zu zeigen oder zu verstecken
    // Wir initialisieren den State isOpen mit dem Wert false.
    const [isOpen, setIsOpen] = useState(false);

    // Funktion, um das Dropdown-Menü zu öffnen oder zu schließen
    // Diese Funktion toggelt den Wert von isOpen zwischen true und false.
    // Sie wird aufgerufen, wenn der Button gedrückt wird.
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="dropdown">
            {/* Das Dropdown-Menü öffnet sich, wenn der Button gedrückt wird, da der onClick-Handler die Funktion toggleDropdown aufruft */}
            <button className="bg-slate-800 p-2 rounded-md" onClick={toggleDropdown}>
                Dynamic Products Menu
            </button>

            {isOpen && (
                <ul className="block absolute bg-slate-800 z-1 p-2 rounded-md">
                    {/* Anstatt die li-Tags manuell zu erstellen, können wir die map() Methode verwenden um die Produkte dynamisch zu rendern */}
                    {/* Wir iterieren über die products Array und rendern für jedes Produkt einen List-Item */}  
                    {/*Jede Option enthält dabei einen Key um React zu helfen die einzelnen Elemente zu identifizieren */}
                    {products.map((product) => (
                        <li className="hover:bg-slate-700 p-2 rounded-md cursor-pointer" key={product.uid}>{product.name}</li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
}