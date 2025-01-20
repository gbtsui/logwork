"use client"

import {useState} from "react";

export default function SortDropdown({sortByDueDate, sortByCreationDate}:{sortByDueDate: (direction: boolean) => void, sortByCreationDate: (direction: boolean) => void}) {
    const [isOpen, setIsOpen] = useState(false);
    const [up, setUp] = useState<boolean>(false);
    const [sortMethod, setSortMethod] = useState("random")

    return (
        <div className={"dropdown relative justify-items-center"}>
            <button onClick={()=> {
                setUp(!up)
                if (sortMethod == "due date") {
                    sortByDueDate(up)
                } else if (sortMethod == "creation date") {
                    sortByCreationDate(up)
                }

            }}>
                {up ? (<span className={"material-symbols-outlined"}>arrow_upward</span>)
                    :
                    (<span className={"material-symbols-outlined"}>arrow_downward</span>)}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className={"material-symbols-outlined"}>sort</span> sort by {sortMethod}
            </button>
            {isOpen ? (
                <ul className={"menu absolute mx-1 border-4 border-darkforestgreen rounded-tr-lg rounded-bl-lg w-36 items-center"}>
                    <li className={"menu-item m-0 bg-forestgreen hover:bg-darkforestgreen"}>
                        <button onClick={() => {
                            sortByDueDate(up);
                            setIsOpen(false);
                            setSortMethod("due date")
                        }} className={"w-full p-1"}>sort by due date
                        </button>
                    </li>
                    <li className={"menu-item m-0 bg-forestgreen hover:bg-darkforestgreen"}>
                        <button onClick={() => {
                            sortByCreationDate(up);
                            setIsOpen(false)
                            setSortMethod("creation date")
                        }} className={"w-full p-1"}>sort by creation date
                        </button>
                    </li>
                </ul>
            ) : null}
        </div>
    )
}