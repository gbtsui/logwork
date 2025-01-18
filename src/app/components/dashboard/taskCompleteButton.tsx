"use client"
import completeTask from "@/app/utils/database/completeTask";
import {useTaskStore} from "@/app/utils/store/taskStore";

export default function TaskCompleteButton({task_id, completed}: { task_id: number, completed: boolean }) {
    const storeCompleteTask = useTaskStore((state) => state.completeTask);

    return (
        <button onClick={async () => {
            storeCompleteTask(task_id)
            await completeTask(task_id)
        }
        }>
            {completed ? <span className={"material-symbols-outlined fill-eggshell"}>check_circle</span> : <span className={"material-symbols-outlined"}>radio_button_unchecked</span>}
        </button>
    )
}