"use server"

import hashPassword from "@/app/utils/authentication/hashPassword";
import {prisma} from "@/app/utils/database/db";
import {ZodError} from "zod";
import {emailSchema, passwordSchema} from "@/app/utils/authentication/validation";
import bcrypt from "bcrypt";

export default async function changePassword(credentials: {
    email: string,
    old_password: string,
    new_password: string
}) {
    try {
        const {email} = await emailSchema.parseAsync(credentials);
        const {old_password, new_password} = await passwordSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({ where: { email } });

        const pwMatch = await bcrypt.compare(old_password, user?.password as string);

        if (!pwMatch) {
            return new Error("wrong password")
        }

        const hashedPassword = await hashPassword(new_password);

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