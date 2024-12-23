"use server"
import {options} from "@/app/api/auth/[...nextauth]/options"
import {getServerSession} from "next-auth/next"

export default async function getSession() {
    const session = await getServerSession(options)
    console.log(session)
    return session
}