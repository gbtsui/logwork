"use server"
import {options} from "@/app/api/auth/[...nextauth]/options"
import {getServerSession} from "next-auth/next"

export default async function getSession() {
    return getServerSession(options)
}