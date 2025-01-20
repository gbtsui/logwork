"use client"

import {useState} from "react";

export default function SortDropdown({sortByDueDate, sortByCreationDate}:{sortByDueDate: () => void, sortByCreationDate: () => void}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"dropdown relative justify-items-center"}>
            <button onClick={()=> setIsOpen(!isOpen)}>
                <span className={"material-symbols-outlined"}>sort</span> sort by...
            </button>
            {isOpen ? (
                <ul className={"menu absolute mx-1 border-4 border-darkforestgreen rounded-tr-lg rounded-bl-lg w-36 items-center"}>
                    <li className={"menu-item m-0 bg-forestgreen hover:bg-darkforestgreen"}>
                        <button onClick={() => {
                            sortByDueDate();
                            setIsOpen(false)
                        }} className={"w-full p-1"}>sort by due date
                        </button>
                    </li>
                    <li className={"menu-item m-0 bg-forestgreen hover:bg-darkforestgreen"}>
                        <button onClick={() => {
                            sortByCreationDate();
                            setIsOpen(false)
                        }} className={"w-full p-1"}>sort by creation date
                        </button>
                    </li>
                </ul>
            ) : null}
        </div>
    )
}