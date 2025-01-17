import {create} from "zustand"
import {Task} from "@prisma/client"
import getSession from "@/app/utils/authentication/getSession";
import getTaskList from "@/app/utils/database/getTaskList";

interface TaskStore {
    tasks: Task[],
    addTask: (task: Task) => void,
    modifyTask: (task: Task) => void,
    deleteTask: (task: Task) => void,
    completeTask: (task: Task) => void,

    fetchTaskList: () => Promise<void>,
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (task: Task) => set((state) => ({tasks: [...state.tasks, task]})),
    modifyTask: (task: Task) => console.log("Not Implemented Yet, tried to modify task ", task),
    deleteTask: (task: Task) => set((state) => ({tasks: [...state.tasks.filter((existingTask) => existingTask.id !== task.id)]})),
    completeTask: (task: Task) => console.log("Not Implemented Yet, tried to complete task ", task),

    fetchTaskList: async () => {
        const session = await getSession()
        // @ts-ignore
        const userId: number = session?.user?.id
        const taskList = await getTaskList(userId)

        set({tasks: taskList})
    }
}))
