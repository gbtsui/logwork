import {User} from "@prisma/client"
import {prisma} from "@/app/utils/database/db";

export default async function createTask({
                                             user,
                                             task_name,
                                             task_description,
                                             due_at,

                                         }:
                                         {
                                             user: User,
                                             task_name: string,
                                             task_description: string | null,
                                             due_at: Date
                                         }) {

    try{
        const user_id = user.id;

        const result = await prisma.task.create({
            data: {
                task_name: task_name,
                task_description: task_description,
                owner_id: user_id,
                due_at: due_at,
                completed: false
            }
        })

        if (result) {
            return result
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        if (error instanceof Error){
            return error
        }
    }

}