"use client"

import {Task} from "@prisma/client";

export default function TaskList({tasks}: {tasks: Task[]}) {
    return (
        <div className="flex flex-col">
            {
                tasks &&
                tasks.map(task => <div>
                    <h1 className={"text-xl"}>{task.task_name}</h1>
                    <p>{task.task_description}</p>
                </div>)
            }
            {
                tasks.length === 0 &&
                (<div>
                    <h1 className={"text-3xl text-center"}>No tasks found. Go and make some!</h1>
                </div>)
            }
        </div>
    )
}