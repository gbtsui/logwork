"use client"
import completeTask from "@/app/utils/database/completeTask";
import {useTaskStore} from "@/app/utils/store/taskStore";

export default function TaskCompleteButton({task_id, completed}: {task_id: number, completed: boolean}) {
    const storeCompleteTask = useTaskStore((state) => state.completeTask);
    return (
        <button onClick={ async () => {
            const result = await completeTask(task_id)
            storeCompleteTask(result)
            }
        }>
            {completed ? <p>Complete</p> : <p>Mark Completed</p>}
        </button>
    )
}