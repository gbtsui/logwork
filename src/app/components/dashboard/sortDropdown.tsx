"use client"

import {useState} from "react";

export default function SortDropdown({sortByDueDate}:{sortByDueDate: () => void}){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"dropdown justify-items-center"}>
            <button onClick={()=> setIsOpen(!isOpen)}>
                <span className={"material-symbols-outlined"}>sort</span>
            </button>
            {isOpen ? (
                <ul className={"menu mx-1 border-4 border-darkforestgreen rounded-tr-lg rounded-bl-lg w-36 items-center"}>
                    <li className={"menu-item m-0 bg-forestgreen hover:bg-darkforestgreen"}>
                        <button onClick={() => {
                            sortByDueDate();
                            setIsOpen(false)
                        }} className={"w-full p-1"}>sort by due date
                        </button>
                    </li>
                </ul>
            ) : null}
        </div>
    )
}