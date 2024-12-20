"use client"
import completeTask from "@/app/utils/database/completeTask";

export default function TaskCompleteButton({task_id}: {task_id: number}) {

    return (
        <button onClick={ async () => {
            completeTask(task_id)
            }
        }>
           Mark Completed
        </button>
    )
}