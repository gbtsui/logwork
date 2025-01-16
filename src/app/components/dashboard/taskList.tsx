"use client"

import {Task} from "@prisma/client";
import TaskCompleteButton from "@/app/components/dashboard/taskCompleteButton";
import {useTaskStore} from "@/app/utils/store/taskStore"
import {useEffect} from "react";

export default function TaskList() {
    const tasks: Task[] = useTaskStore((state) => state.tasks);
    const fetchTaskList = useTaskStore((state) => state.fetchTaskList);

    useEffect(() => {
        fetchTaskList();
    })

    return (
        <div className="flex flex-row">
            {
                tasks &&
                tasks.map(task =>
                    <div key={task.id} className={"border-2 border-foreground rounded-bl-lg rounded-tr-lg p-2 m-1 w-44 h-44"}>
                        <h1 className={"text-xl"}>{task.task_name}</h1>
                        <p>{task.task_description}</p>
                        <TaskCompleteButton task_id={task.id} />
                        <p className={"text-xs"}>Created at {task.created_at.toString()}</p>
                    </div>)
            }
            {
                tasks.length === 0 &&
                (<div>
                    <h1 className={"text-3xl text-center"}>no tasks found; go and make some</h1>
                </div>)
            }
        </div>
    )
}