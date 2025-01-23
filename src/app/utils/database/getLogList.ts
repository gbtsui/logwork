"use server"
import {prisma} from "@/app/utils/database/db";

export default async function getLogList(username: string) {
    try {
        const owner = await prisma.user.findUnique({where: {username: username}})

        return prisma.log.findMany({where: {owner_id: owner?.id}})
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
            return error
        }
    }
}