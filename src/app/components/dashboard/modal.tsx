"use client"
import React, {ReactNode} from "react";

export default function Modal({ isOpen, onClose, title, children}: {isOpen: boolean, onClose: () => void, title: string, children: ReactNode}) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-hidden h-screen w-full flex items-center justify-center z-50">
            <div className="p-6 bg-background rounded-lg shadow-lg w-96 overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        &times;
                    </button>
                </div>
                <div className="space-y-4">
                    {children}
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                    <button className="bg-foreground text-background px-4 py-2 rounded hover:bg-red-600 hover:text-foreground hover:px-5 hover:py-3 transition-all" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}