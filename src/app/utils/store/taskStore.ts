import {create} from "zustand"
import {Task} from "@prisma/client"
import getSession from "@/app/utils/authentication/getSession";
import getTaskList from "@/app/utils/database/getTaskList";

interface TaskStore {
    tasks: Task[],
    addTask: (task: Task) => void,
    modifyTask: (task: Task) => void,
    deleteTask: (task: Task) => void,
    completeTask: (taskId: number) => void,

    sortListByDueDate: () => void,
    sortListByCreationDate: () => void,

    fetchTaskList: () => Promise<void | Error>,
}


export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (task: Task) => set((state) => ({tasks: [...state.tasks, task]})),
    modifyTask: (task: Task) => console.log("Not Implemented Yet, tried to modify task ", task),
    deleteTask: (task: Task) => set((state) => ({
        tasks: [...state.tasks.filter((existingTask) => existingTask.id !== task.id)]
    })),
    completeTask: (taskId: number) => set((state) => ({
        tasks: state.tasks.map((existingTask: Task) =>
            taskId === existingTask.id ? { ...existingTask, completed: !existingTask.completed } : existingTask
        ),
    })),

    sortListByDueDate: () => set((state) => ({
        tasks: state.tasks.toSorted((a, b) => a.due_at.getTime() - b.due_at.getTime())
    })),
    sortListByCreationDate: () => set((state) => ({
        tasks: state.tasks.toSorted((a, b) => a.created_at.getTime() - b.created_at.getTime())
    })),

    fetchTaskList: async () => {
        const session = await getSession()
        // @ts-ignore
        const username: number = session?.user?.name
        const taskList = await getTaskList(username)

        if (taskList instanceof Error) {
            return taskList
        }

        return set({tasks: taskList})
    }
}))
