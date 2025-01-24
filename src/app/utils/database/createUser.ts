"use server"
import hashPassword from "@/app/utils/authentication/hashPassword";
import {prisma} from "@/app/utils/database/db";
import {userSchema} from "@/app/utils/authentication/validation";


export default async function createUser(credentials: {
    username: string;
    password: string;
    email: string;
}) {
    try {
        const {username, email, password} = await userSchema.parseAsync(credentials);


        const otherUserWithUsername = await prisma.user.findUnique({
            where: {
                username: username,
            }
        })
        if (otherUserWithUsername) {
            return new Error("USERNAME_IN_USE");
        }
        const otherUserWithEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (otherUserWithEmail) {
            return new Error("EMAIL_IN_USE");
        }

        const hashedPassword = await hashPassword(password)
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword
            }
        })
        console.log(user)
        return user
    } catch (error) {
        if (error instanceof Error) {
            return error
        } else {
            return null
        }
    }


}
