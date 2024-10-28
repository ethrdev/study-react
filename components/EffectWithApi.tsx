"use client";

import React, { useEffect, useState } from "react";
export default function EffectWithApi() {
    // State für die API-Daten
    const [data, setData] = useState([]);

    // useEffect ist ein Hook, der verwendet wird, um side effects in React-Komponenten zu handhaben.
    // useEffect wird immer dann aufgerufen, wenn bestimmte Werte geändert werden.
    // Wenn die Komponente gerendert wird, wird useEffect aufgerufen.
    useEffect(() => {
        // fetchData ist eine asynchrone Funktion, die die API-Daten fetcht.
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const result = await response.json();
                // Sobald die Daten geladen sind, werden sie in der State gespeichert.
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        // fetchData wird aufgerufen
        fetchData();
        // [] bedeutet, dass der Effekt nur einmal ausgeführt wird, wenn die Komponente gerendert wird.
    }, []);

    return (
        <div>
            <h1>API-Daten:</h1>
            {/* Liste der API-Daten */}
            <ul>
                {/* Map durch die API-Daten und gibt die Titel der Posts aus */}
                {data.map((post: { id: number, title: string }) => (
                    // Jeder Post wird in einer Liste ausgegeben
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}