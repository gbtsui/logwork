"use client"
import createTask from "@/app/utils/database/createTask"
import {useTaskStore} from "@/app/utils/store/taskStore";
import {Task} from "@prisma/client";

export default function CreateTaskForm() {
    const addTask: (task: Task) => void = useTaskStore((state) => state.addTask);
    function create(formData: FormData) {
        console.log("create function called")
        const getResult = async () => {
            const result = await createTask(formData);
            console.log("task created");
            addTask(result);
            console.log("task added to zustand")
        }
        getResult();
    }

    const testTask: Task = {
        id: 69420,
        task_name: "DevTestTask",
        task_description: "A test task for the dev to test tasks in the task list",
        owner_id: 1,
        created_at: Date.now(),
        due_at: Date.now(),
        completed: false
    }

    return (
        <>
        <form action={(e) => create(e)} className={"text-background m-2"}>
            <input name={"task_name"} type="text" defaultValue={"task name"} required></input><br/>
            <input name={"task_description"} type="text" defaultValue={"task description"} required></input><br/>
            <input name={"due_at"} type={"datetime-local"} defaultValue={Date.now()} required/><br/>
            <input name={"submit"} type={"submit"} className={"p-3 bg-cream text-background bg-foreground"}/>
        </form>
            { process.env.NODE_ENV === "development" &&
                <button onClick={(e) => addTask(testTask)}>Add a test task (hi future me!)</button>
            }
        </>
    )
}