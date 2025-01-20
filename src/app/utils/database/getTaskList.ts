"use server"
import {prisma} from "@/app/utils/database/db";

export default async function getTaskList(user_id: number) {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                owner_id: user_id,
            }
        })

        if (tasks.length === 0) {
            return []
        }
        return tasks
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
            return error
        }
    }
}