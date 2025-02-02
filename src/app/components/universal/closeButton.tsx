import React from "react";

export default function CloseButton({onClose}: { onClose: () => void }) {
    return (
        <button
            className="bg-foreground text-background rounded-bl-lg rounded-tr-lg px-4 py-2 hover:bg-cream hover:text-darkforestgreen hover:px-5 hover:py-3 transition-all"
            onClick={onClose}>
            cancel
        </button>)
}