'use client';

import { useState, useEffect } from 'react';

export default function EffectWithDependencies() {
    const [count, setCount] = useState(0);
    const [countChanged, setCountChanged] = useState(false); // State für die Anzeige der Count-Änderung

    useEffect(() =>  {
        document.title = `You clicked ${count} times`;
    }, [count]); // Dieser Effekt wird nur ausgeführt, wenn sich "count" ändert

    useEffect(() => {
        if (count > 0) { // Nur anzeigen, wenn count größer als 0 ist
            setCountChanged(true);
        }
    }, [count]); // Dieser Effekt wird ausgeführt, wenn sich der "count" ändert

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            {countChanged && <p>Count has changed!</p>}
        </div>
    )
}
