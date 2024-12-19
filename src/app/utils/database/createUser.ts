import hashPassword from "@/app/utils/authentication/hashPassword";
import {prisma} from "@/app/utils/database/db";
import {ZodError} from "zod"
import {userSchema} from "@/app/utils/authentication/validation";

class CreateUserError extends Error {}

export default async function createUser(credentials: {
    username: string;
    password: string;
    email: string;
}){
    try {
        const {username, email, password} = await userSchema.parseAsync(credentials);

        const otherUserWithUsername = await prisma.user.findUnique({
            where: {
                username: username,
            }
        })
        if (otherUserWithUsername) {
            throw new CreateUserError("USERNAME_IN_USE");
        }
        const otherUserWithEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (otherUserWithEmail) {
            throw new CreateUserError("EMAIL_IN_USE");
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
        console.error(error)
        if (error instanceof CreateUserError) {
            return error
        } else if (error instanceof ZodError) {
            return error
        } else {
            return null
        }
    }

}
