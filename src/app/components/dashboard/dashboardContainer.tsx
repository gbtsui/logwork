"use client"
import TaskList from "@/app/components/dashboard/taskList";
import CreateTaskButton from "@/app/components/dashboard/createTaskButton";
//import Modal from "@/app/components/dashboard/modal";


export default function DashboardContainer() {

    return (
        <div>
            <h1 className={"text-7xl text-center p-3 m-3"}>
                dashboard
            </h1>
            <h2 className={"ml-8"}>
                <CreateTaskButton/>
                <TaskList/>
            </h2>
        </div>
    )
}