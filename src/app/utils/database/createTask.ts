"use server"
import {prisma} from "@/app/utils/database/db";
import getSession from "@/app/utils/authentication/getSession";

export default async function createTask(formData: FormData) {

    const session = await getSession();

    const user = await prisma.user.findUnique(
        {
            where: {
                username: session?.user?.name as string
            }
        }
    )

    const user_id = user?.id
    const due_at: Date = new Date(formData.get("due_at") as string)

    console.log({
        task_name: formData.get("task_name") as string,
        task_description: formData.get("task_description") as string,
        owner_id: user_id as number,
        due_at: due_at
    })
    await prisma.task.create({
        data: {
            task_name: formData.get("task_name") as string,
            task_description: formData.get("task_description") as string,
            owner_id: user_id as number,
            due_at: due_at
        }
    })


    //console.log(result)

    //if (result) {
    //    return result
    //} else {
    //   return null
    //}

}

