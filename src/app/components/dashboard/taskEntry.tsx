"use client"

import {Task} from "@prisma/client";
import TaskCompleteButton from "@/app/components/dashboard/taskCompleteButton";
import {useState} from "react";
import Modal from "@/app/components/dashboard/modal";
import deleteTask from "@/app/utils/database/deleteTask";
import {useTaskStore} from "@/app/utils/store/taskStore";

export default function TaskEntry({task}: {task: Task}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const deleteTaskFromStore = useTaskStore((state) => state.deleteTask);

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={"delet?"}>
                <p>are you sure you want to delete "{task.task_name}"?</p>
                <button onClick={async () => {
                    await deleteTask(task.id);
                    deleteTaskFromStore(task);
                    setIsOpen(false);
                }}>
                    DELET THIS !!!!
                </button>
            </Modal>

            <div className={"border-2 border-foreground rounded-bl-lg rounded-tr-lg p-2 m-1 w-44 h-44"}>
                <h1 className={"text-xl"}>{task.task_name}</h1>
                <p>{task.task_description}</p>
                <TaskCompleteButton task_id={task.id} completed={task.completed}/>
                <p className={"text-xs"}>Created at {task.created_at.toString()}</p>
                <button onClick={() => setIsOpen(true)}> delet :( </button>
            </div>
        </>
    )
}