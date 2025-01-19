"use client"

import {Task} from "@prisma/client";
import TaskCompleteButton from "@/app/components/dashboard/taskCompleteButton";
import {useEffect, useState} from "react";
import Modal from "@/app/components/universal/modal";
import deleteTask from "@/app/utils/database/deleteTask";
import {useTaskStore} from "@/app/utils/store/taskStore";

export default function TaskEntry({task}: {task: Task}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const deleteTaskFromStore = useTaskStore((state) => state.deleteTask);

    const [dueSoon, setDueSoon] = useState<boolean>(false);
    const [overdue, setOverdue] = useState<boolean>(false);

    useEffect(() => {
        if ((task.due_at.getTime() - Date.now()) < 0) {
            setOverdue(true);
            console.log(task.task_name, "overdue", (task.due_at.getTime() - Date.now()))
        } else if ((task.due_at.getTime() - Date.now()) < 3600000) {
            setDueSoon(true);
            console.log(task.task_name, " due soon", task.due_at.getTime() - Date.now())
        } else {
            console.log(task.task_name, "due eventually", task.due_at.getTime() - Date.now());
        }
    })



    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={"delet?"} buttons={
                <button className={"bg-foreground text-background px-4 py-2 rounded hover:bg-red-600 hover:text-foreground hover:px-5 hover:py-3 transition-all"}
                        onClick={async () => {
                            await deleteTask(task.id);
                            deleteTaskFromStore(task);
                            setIsOpen(false);
                        }}>
                    delete
                </button>
            }>
                <p>are you sure you want to delete "{task.task_name}"?</p>
            </Modal>

            <div className={`border-2 border-background hover:border-foreground rounded-bl-lg rounded-tr-lg p-2 m-1 w-1/6 max-h-96 h-96 overflow-y-auto transition-colors ${/*dueSoon? "bg-foreground" : "bg-background"*/ "bg-background"}`}>
                <div className={"flex justify-between items-center"}>
                    <TaskCompleteButton task_id={task.id} completed={task.completed}/>
                    <button onClick={() => setIsOpen(true)}>
                        <span className={"material-symbols-outlined hover:text-red-600 transition-colors"}>delete</span>
                    </button>
                </div>
                <h1 className={"text-xl"}>{task.task_name}</h1>
                {
                    dueSoon && !task.completed && <h2 className={"text-lg text-amber-300"}>due soon!</h2>
                }
                {
                    overdue && !task.completed && <h2 className={"text-lg text-red-500"}>overdue!</h2>
                }
                <div className={"max-h-svh"}>
                <p>{task.task_description}</p>
                    <p className={"text-xs"}>Created at {task.created_at.toString()}</p>
                </div>
            </div>
        </>
    )
}