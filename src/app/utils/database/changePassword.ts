import hashPassword from "@/app/utils/authentication/hashPassword";
import {prisma} from "@/app/utils/database/db";
import {ZodError} from "zod";
import {emailSchema, passwordSchema} from "@/app/utils/authentication/validation";

export default async function changePassword(credentials: {
    email: string,
    password: string
}) {
    try {
        const {email} = await emailSchema.parseAsync(credentials);
        const {password} = await passwordSchema.parseAsync(credentials);

        const hashedPassword = await hashPassword(password);

        return await prisma.user.update({
            where: {
                email: email
            },
            data: {
                password: hashedPassword
            }
        })

    } catch (error) {
        console.error(error);
        if (error instanceof ZodError) {
            return error;
        } else {
            return new Error("UNKNOWN_ERROR");
        }
    }
}