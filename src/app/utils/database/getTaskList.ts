import {prisma} from "@/app/utils/database/db";

export default async function getTaskList(user_id: number) {
    const tasks = await prisma.task.findMany({
        where: {
            owner_id: user_id,
        }
    })

    if (tasks.length === 0) {
        return []
    }

    return tasks
}