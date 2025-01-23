"use server"
import {prisma} from "@/app/utils/database/db";
import getSession from "@/app/utils/authentication/getSession"

export default async function createLog(formData: FormData) {

    const session = await getSession();

    const user = await prisma.user.findUnique(
        {
            where: {
                username: session?.user?.name as string
            }
        }
    );

    const user_id = user?.id as number;

    const log_time: number = (formData.get("time_hours") as unknown as number * 3600) + (formData.get("time_minutes") as unknown as number * 60)

    //@ts-ignore
    const productivity_rating: number = formData.get("productivity") as unknown as number * 1;

    return prisma.log.create({
        data: {
            owner_id: user_id,
            log_content: formData.get("log_content") as string,
            log_time: log_time,
            productivity_rating: productivity_rating,
        }
    })

}