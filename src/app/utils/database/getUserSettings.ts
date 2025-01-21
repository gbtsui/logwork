"use server"

import {prisma} from "@/app/utils/database/db";
import {UserSettings} from "@prisma/client";

export default async function getUserSettings(username: string): Promise<UserSettings> {
    const user = await prisma.user.findUnique({where: {username: username}});

    const userSettings = await prisma.userSettings.findUnique({where: {owner_id: user?.id}})

    if (!userSettings) {
        return prisma.userSettings.create({data: {owner_id: user?.id as number}})
    }
    return userSettings
}