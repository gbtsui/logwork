"use client"

import {Log} from "@prisma/client";

export default function LogEntry({log}: { log: Log }) {
    return (
        <div
            className={"w-full m-5 p-3 hover:border-eggshell border-darkforestgreen border-2 bg-forestgreen rounded-tr-2xl rounded-bl-xl transition-all"}>
            <h2 className={"text-xl font-bold align-middle inline-block text-eggshell overflow-y-auto"}>{log.created_at.getFullYear()}-{log.created_at.getMonth() + 1}-{log.created_at.getDate()}/{log.created_at.getHours()}:{log.created_at.getMinutes()} ({Math.floor(log.log_time / 3600)}:{Math.floor(log.log_time % 60)})</h2>
            <p className={"text-sm"}>productivity rating: {log.productivity_rating}</p>
            <p className={"text-md"}>{log.log_content}</p>
        </div>
    )
}