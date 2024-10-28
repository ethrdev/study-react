'use client';

import { useState, useEffect } from 'react';

export default function EffectWithDependencies() {
    // State für die Anzahl der Klicks
    const [count, setCount] = useState(0);
    // State für die Anzeige der Count-Änderung
    const [countChanged, setCountChanged] = useState(false);

    // Dieser Effekt wird ausgeführt, wenn sich "count" ändert
    useEffect(() =>  {
        document.title = `You clicked ${count} times`;
        // Abhängigkeit
    }, [count]);

    // Dieser Effekt wird ausgeführt, wenn sich "count" ändert
    useEffect(() => {
        if (count > 0) {
            setCountChanged(true);
        }
    }, [count]);

    return (
        <div>
            {/* Darstellung der Anzahl der Klicks */}
            <p>You clicked {count} times</p>
            {/* Button zum Erhöhen der Anzahl der Klicks */}
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            {/* Darstellung der Änderung der Anzahl der Klicks */}
            {countChanged && <p>Count has changed!</p>}
        </div>
    )
}
