"use client"
import deleteTask from "@/app/utils/database/deleteTask";

export default function TaskDeleteButton({task_id}: { task_id: number }) {
    return (
        <button onClick={async () => deleteTask(task_id)}>
            delete :(
        </button>
    )
}