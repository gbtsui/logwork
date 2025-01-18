"use server"
import {prisma} from "@/app/utils/database/db";

export default async function completeTask(task_id: number) {
    const task = await prisma.task.findUnique(
        {
            where: {
                id: task_id,
            }
        }
    )

    const complete = task?.completed
    //kinda gross ngl but it is what it is

    return prisma.task.update({
        where: {
            id: task_id
        },
        data: {
            completed: !complete
        }
    })
}