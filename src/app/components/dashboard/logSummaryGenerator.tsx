"use client"

import generateLogSummary from "@/app/utils/database/generateLogSummary";
import {useLogStore} from "@/app/utils/store/logStore";
import getSession from "@/app/utils/authentication/getSession";
import {useEffect, useState} from "react";

export default function LogSummaryGenerator() {
    const [loading, setLoading] = useState(true);

    const logSummaries = useLogStore((state) => state.logSummaries);
    const addLogSummary = useLogStore((state) => state.addLogSummary);
    const fetchLogSummaryList = useLogStore((state) => state.fetchLogSummaryList);

    useEffect(() => {
        const getResult = async () => {
            setLoading(true)
            await fetchLogSummaryList()
            setLoading(false)
        }
        getResult()
    }, [fetchLogSummaryList])

    function generate() {
        const generateSummary = async () => {
            const session = await getSession();
            const username = session?.user?.name as string
            const summary = await generateLogSummary(username)
            console.log(summary)
            addLogSummary(summary)
        }
        generateSummary()
    }

    if (loading) {
        return (
            <div className={"w-1/3"}>
                <div className={"text-center bg-cream mr-7 mt-6 rounded-tr-2xl rounded-bl-2xl"}>
                    <h1 className={"text-4xl font-bold p-3 text-darkforestgreen"}>summaries</h1>
                    <button onClick={generate}
                            className={"bg-forestgreen p-3 text-cream rounded-tr-lg rounded-bl-lg my-3 disabled:bg-eggshell disabled:text-gray-500"}
                            disabled>generate a
                        summary!!!
                    </button>
                </div>
            </div>)
    }

    return (
        <div className={"w-1/3"}>
            <div className={"text-center bg-cream mr-7 mt-6 rounded-tr-2xl rounded-bl-2xl"}>
                <h1 className={"text-4xl font-bold p-3 text-darkforestgreen"}>summaries</h1>
                <button onClick={generate}
                        className={"bg-forestgreen p-3 text-cream rounded-tr-lg rounded-bl-lg my-3 hover:p-4 transition-all disabled:bg-eggshell disabled:text-gray-500"}>generate
                    a
                    summary!!!
                </button>
                {logSummaries && logSummaries.map((logSum) => (
                    <div key={logSum.id} className={"m-2 p-2 bg-forestgreen rounded-tr-xl rounded-bl-xl"}>
                        <h3>{logSum.created_at.toDateString()}</h3>
                        <p className={"text-md"}>{logSum.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}