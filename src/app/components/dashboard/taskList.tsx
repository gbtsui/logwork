"use client"

import {Task} from "@prisma/client";
import {useTaskStore} from "@/app/utils/store/taskStore"
import {useEffect, useState} from "react";
import LoadingSkeleton from "@/app/components/universal/loadingSkeleton";
import TaskEntry from "@/app/components/dashboard/taskEntry";
import CreateTaskButton from "@/app/components/dashboard/createTaskButton";
import SortDropdown from "@/app/components/dashboard/sortDropdown";
//import Modal from "@/app/components/dashboard/modal";


export default function TaskList() {
    const tasks: Task[] = useTaskStore((state) => state.tasks);
    const fetchTaskList: () => Promise<void | Error> = useTaskStore((state) => state.fetchTaskList);
    const sortListByDueDate = useTaskStore((state) => state.sortListByDueDate)
    const sortListByCreationDate = useTaskStore((state) => state.sortListByCreationDate)

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchTaskListEffect = async () => {
            try {
                setLoading(true);
                const result: void | Error = await fetchTaskList();
                if (result instanceof Error) {
                    setError(result)
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTaskListEffect();
    }, [fetchTaskList]);

    const overdueTasks = tasks.filter(task => {
        return (task.due_at.getTime() - Date.now()) < 0 && !task.completed
    }).length
    const dueSoonTasks = tasks.filter(task => {
        return ((task.due_at.getTime() - Date.now()) < 3600000 && (task.due_at.getTime() - Date.now()) > 0 && !task.completed)
    }).length
    const completedTasks = tasks.filter(task => {
        return task.completed
    }).length

    if (loading) {
        return <LoadingSkeleton/>;
    }

    return (
        <>
            {
                error ? (
                    <div className={"text-center p-3 text-red-500 bg-cream m-3 rounded-tr-2xl rounded-bl-2xl text-xl"}>
                        <h1 className={"text-3xl text-darkforestgreen"}>wake up, new error just dropped</h1>
                        <p>{error.message}</p>
                        <p className={"text-forestgreen text-2xl"}>{error.message.includes("Can't reach database server") && "check your internet connection. if this is server side, open an issue on github"}</p>
                    </div>
                ) : (
                    <>
                        <div
                            className={"flex justify-between p-2 pr-7 bg-forestgreen mx-7 my-3 rounded-tr-3xl rounded-bl-3xl align-middle"}>
                            <div className={"flex justify-between flex-row content-center"}>
                                <h2 className={"text-2xl align-middle content-center bg-darkforestgreen rounded-bl-xl p-2"}>{tasks.length}</h2>
                                <div className={"flex flex-col bg-cream p-1.5 rounded-tr-xl"}>
                                    <h2 className={"text-xl font-bold align-middle inline-block text-red-500"}>{overdueTasks} overdue</h2>
                                    <h2 className={"text-xl font-bold align-middle inline-block text-amber-500"}>{dueSoonTasks} due
                                        soon</h2>
                                    <h2 className={"text-xl font-bold align-middle inline-block text-forestgreen"}>{completedTasks} complete</h2>
                                </div>
                            </div>
                            <SortDropdown sortByDueDate={sortListByDueDate}
                                          sortByCreationDate={sortListByCreationDate}/>
                            <CreateTaskButton/>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center w-full mb-32">
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
                    </>
                )
            }
        </>
    )
}