"use client"
import TaskList from "@/app/components/dashboard/taskList";

export default function DashboardContainer() {

    return (
        <div>
            <h1 className={"text-7xl text-center p-3 m-3"}>
                dashboard
            </h1>
            <TaskList/>
        </div>
    )
}