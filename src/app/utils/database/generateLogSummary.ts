"use server"

import {prisma} from "@/app/utils/database/db";
import {groq} from "@/app/utils/groq";


export default async function generateLogSummary(username: string) {

    const user = await prisma.user.findUnique({where: {username: username}});

    const now = new Date();

    const logList = await prisma.log.findMany({
        where: {
            owner_id: user?.id,
            created_at: {
                gte: new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
            }
        }
    })

    console.log(JSON.stringify(logList));


    const response = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "summarize the following logs of a workday in under 150 words. try not to be too data-heavy, but include the total time spent working. respond in all lowercase and in a moderately encouraging but slightly robotic tone. ignore the 'created_at' values, focus on 'log_time' and 'productivity_rating', and mainly summarize 'log_content'. 'log_time' is measured in seconds."
            },

            {
                role: "user",
                content: JSON.stringify(logList)
            },
        ],
        model: "llama3-70b-8192"
    })
    console.log(response.choices[0].message.content)

    const result = prisma.logSummary.create({
        data: {
            owner_id: user?.id as number,
            content: response.choices[0].message.content as string,
        }
    })
    console.log(result)

    return result
}