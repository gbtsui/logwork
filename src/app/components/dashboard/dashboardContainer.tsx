"use client"
import TaskList from "@/app/components/dashboard/taskList";


export default function DashboardContainer() {

    return (
        <div className={"m-2"}>
            <h1 className={"text-7xl text-center p-3 m-3"}>
                dashboard
            </h1>
            <h2 className={"ml-8"}>
                <TaskList/>
                {/*<CreateTaskForm/>*/}
            </h2>
        </div>
    )
}