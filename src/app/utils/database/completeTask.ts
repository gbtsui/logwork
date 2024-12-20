"use server"
import {prisma} from "@/app/utils/database/db";

export default async function completeTask(task_id: number) {
    try {
        const task = await prisma.task.findUnique(
            {
                where: {
                    id: task_id,
                }
            }
        )
        if (!task) {
            console.log("this shouldn't even be humanly possible bruh :sob:")
            throw new Error("NONEXISTENT_TASK")
            //it shouldn't even be possible to reach here but i need to do error handling anyways
        }

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
    } catch (error) {
        console.error(error)
        if (error instanceof Error) {
            return error
        }
    }
}