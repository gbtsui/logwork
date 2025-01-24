"use server"
import {prisma} from "@/app/utils/database/db";

export default async function deleteTask(taskId: number) {
    await prisma.task.delete({
        where: {
            id: taskId
        }
    })
}