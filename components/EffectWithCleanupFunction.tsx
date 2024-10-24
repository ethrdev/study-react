'use client';

import { useEffect } from 'react';

export default function EffectWithCleanupFunction() {

    useEffect(() => {
        const interval = setInterval(() => {
          console.log('Interval läuft...');
        }, 2000);
      
        // Cleanup: Wird aufgerufen, bevor der Effekt erneut ausgeführt wird oder die Komponente entfernt wird
        return () => clearInterval(interval);
    }, []);
}
