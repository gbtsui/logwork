"use server"
import {prisma} from "@/app/utils/database/db";

export default async function getTaskList(username: string) {
    try {
        const owner = await prisma.user.findUnique({where: {username}})

        const tasks = await prisma.task.findMany({
            where: {
                owner_id: owner?.id,
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