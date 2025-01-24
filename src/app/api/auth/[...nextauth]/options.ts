import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
//import GitHubProvider from "next-auth/providers/github"
import {signInSchema} from "@/app/utils/authentication/validation";
import {prisma} from "@/app/utils/database/db";
import bcrypt from "bcrypt";
import {ZodError} from "zod";
import {User} from "@prisma/client";
import {JWT} from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user?: User
    }
}


export const options: NextAuthOptions = {
    providers: [
        /*
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        //need to fix this later btw
         */
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "email@address.com"
                },
                password: {
                    label: "password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                try {
                    const {email, password} = (await signInSchema.parseAsync(credentials))

                    const user = await prisma.user.findUnique({
                        where: {
                            email: email
                        }
                    })

                    if (!user) {
                        return null
                    }

                    const pwMatch = await bcrypt.compare(password, user.password)
                    if (!pwMatch) {
                        return null
                    }
                    return user
                } catch (err) {
                    if (err instanceof ZodError) {
                        return null
                    } else {
                        console.error(err)
                        return null
                    }
                }
            }
        })
    ],
    callbacks: {
        jwt({token, user}: {token: JWT, user: User}){
            if (user) {
                token.id = user.id;
                token.name = user.username;
            }
            return token
        },
        session({session, token}){
            if (token.user) {
                session.user.id = token.id
                session.user.name = token.name
            }
            return session
        }
    },
    pages: {
        signIn: "/entry",
        signOut: "/dashboard"
    },
    jwt: {
        maxAge: 60 * 60 * 24 //1 day
    }
}
