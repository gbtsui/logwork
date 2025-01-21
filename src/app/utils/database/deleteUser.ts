"use server"
import {prisma} from "@/app/utils/database/db";
import bcrypt from "bcrypt";

export default async function deleteUser(username: string, password: string) {
    const user = await prisma.user.findUnique({ where: { username: username } })
    const pwMatch = bcrypt.compare(password, user?.password as string)

    if (!pwMatch) {
        return new Error("wrong password")
    }

    await prisma.user.delete({
        where: { username: username },
    })
    await prisma.task.deleteMany({
        where: {owner_id: user?.id}
    })
    return null
}