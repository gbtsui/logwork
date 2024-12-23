import createTask from "@/app/utils/database/createTask"

export default function CreateTaskForm() {
    async function create(formData: FormData) {
       "use server"
       await createTask(formData)
    }



    return (
        <form action={create} className={"text-background m-2"}> {/*my brain is fried*/}
            <input name={"task_name"} type="text" defaultValue={"task name"} required></input><br/>
            <input name={"task_description"} type="text" defaultValue={"task description"} required></input><br/>
            <input name={"due_at"} type={"datetime-local"} defaultValue={Date.now()} required/><br/>
            <input name={"submit"} type={"submit"} className={"p-3 bg-cream text-background bg-foreground"}/>
        </form>
    )
}