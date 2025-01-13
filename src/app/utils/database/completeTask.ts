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

    const result = await prisma.task.update({
        where: {
            id: task_id
        },
        data: {
            completed: !complete
        }
    })

    if (result) {
        return result
    } else {
        return null
    }
}