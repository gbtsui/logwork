"use server"
import TaskList from "@/app/components/dashboard/taskList"
import getTaskList from "@/app/utils/database/getTaskList";
import CreateTaskForm from "@/app/components/dashboard/createTask";
export default async function Dashboard() {
    const user_id = 1
    const tasks = await getTaskList(user_id)

    return (
        <div className={"m-2"}>
            <h1 className={"text-7xl text-center p-3 m-3"}>
                dashboard
            </h1>
            <h2 className={"ml-8"}>
                <TaskList tasks={tasks} />
                <CreateTaskForm/>
            </h2>
        </div>
    )
}