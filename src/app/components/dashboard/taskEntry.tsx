"use client"

import {Task} from "@prisma/client";
import TaskCompleteButton from "@/app/components/dashboard/taskCompleteButton";

export default function TaskEntry({task}: {task: Task}) {
    return (
        <div className={"border-2 border-foreground rounded-bl-lg rounded-tr-lg p-2 m-1 w-44 h-44"}>
            <h1 className={"text-xl"}>{task.task_name}</h1>
            <p>{task.task_description}</p>
            <TaskCompleteButton task_id={task.id} completed={task.completed}/>
            <p className={"text-xs"}>Created at {task.created_at.toString()}</p>
        </div>
    )
}