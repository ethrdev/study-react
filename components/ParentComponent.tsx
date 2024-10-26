"use client"

import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    // Die Nachricht wird in einem useState gespeichert, und die Funktion changeMessage ändert die Nachricht
    const [message, setMessage] = useState("Hello from the parent component")


    const changeMessage = () => {
        setMessage("The message has been changed")
    }

    return (
        <>
            {/* Die ChildComponent enthält die Nachricht über die props und zeigt sie an */}
            {/* Beim ersten Rendern wird die ChildComponent auch gerendert und die Nachricht wird angezeigt */}
            <ChildComponent message={message} />
            {/* Jedes mal wenn der Button gedrückt wird, wird die Nachricht geändert, wodurch ein re-render ausgelöst wird */}
            <button onClick={changeMessage}>Change Message</button>
        </>
    )
}