"use client"

import {Task} from "@prisma/client";
import {useTaskStore} from "@/app/utils/store/taskStore"
import {useEffect, useState} from "react";
import LoadingSkeleton from "@/app/components/universal/loadingSkeleton";
import TaskEntry from "@/app/components/dashboard/taskEntry";
//import Modal from "@/app/components/dashboard/modal";


export default function TaskList() {
    const tasks: Task[] = useTaskStore((state) => state.tasks);
    const fetchTaskList: () => Promise<void> = useTaskStore((state) => state.fetchTaskList);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchTaskListEffect = async () => {
            try {
                setLoading(true);
                await fetchTaskList();
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTaskListEffect();
    }, [fetchTaskList]);



    if (loading) {
        return <LoadingSkeleton />;
    }

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {
                tasks &&
                tasks.map(task => <TaskEntry task={task} key={task.id}/>)
            }
            {
                tasks.length === 0 && !loading &&
                (<div>
                    <h1 className={"text-3xl text-center"}>no tasks found; go and make some</h1>
                </div>)
            }

        </div>
    )
}