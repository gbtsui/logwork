"use server"

import {prisma} from "@/app/utils/database/db";

export default async function getLogSummaryList(username: string) {
    const owner = await prisma.user.findUnique({where: {username: username}})
    return prisma.logSummary.findMany({
        where: {
            owner_id: owner?.id,
        }
    })
}