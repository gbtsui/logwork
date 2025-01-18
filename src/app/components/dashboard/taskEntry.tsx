"use client"

import {Task} from "@prisma/client";
import TaskCompleteButton from "@/app/components/dashboard/taskCompleteButton";
import {useState} from "react";
import Modal from "@/app/components/universal/modal";
import deleteTask from "@/app/utils/database/deleteTask";
import {useTaskStore} from "@/app/utils/store/taskStore";

export default function TaskEntry({task}: {task: Task}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const deleteTaskFromStore = useTaskStore((state) => state.deleteTask);

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