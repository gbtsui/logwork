"use client"

import {Task} from "@prisma/client";
import TaskCompleteButton from "@/app/components/dashboard/taskCompleteButton";

export default function TaskList({tasks}: {tasks: Task[]}) {
    return (
        <div className="flex flex-col">
            {
                tasks &&
                tasks.map(task =>
                    <div>
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