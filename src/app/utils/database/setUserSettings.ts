"use server"

import {prisma} from "@/app/utils/database/db";
import {UserSettings} from "@prisma/client";

export default async function setUserSettings(newSettings: UserSettings): Promise<UserSettings> {
    return prisma.userSettings.update({
        where: {
            owner_id: newSettings.owner_id
        },
        data: newSettings
    })
}