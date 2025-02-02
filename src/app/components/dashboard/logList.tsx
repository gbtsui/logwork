"use client";

import {Log} from "@prisma/client";
import {useLogStore} from "@/app/utils/store/logStore";
import LogEntry from "@/app/components/dashboard/logEntry";
import {useEffect, useState} from "react";
import CreateLogButton from "@/app/components/dashboard/createLogButton";
import LoadingSkeleton from "@/app/components/universal/loadingSkeleton";
import LogSummaryGenerator from "@/app/components/dashboard/logSummaryGenerator";

export default function LogList() {
    const logs: Log[] = useLogStore((state) => state.logs)
    const fetchLogList: () => Promise<void | Error> = useLogStore((state) => state.fetchLogList)

    const [loading, setLoading] = useState<boolean>(false);
    const [lastLog, setLastLog] = useState<Date | null>(null);

    const setLastLogFunction = (date: Date) => setLastLog(date)

    useEffect(() => {
        const initialize = async () => {
            try {
                setLoading(true)
                const logList = await fetchLogList();
                if (logList instanceof Error) {
                    console.error(logList)
                }
                //logs.sort((a, b) => a.created_at.getDate() - b.created_at.getDate())
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }
        initialize();
    }, [fetchLogList]);

    if (loading) {
        return <LoadingSkeleton/>
    }

    return (
        <>
            <div
                className={"flex justify-between p-2 pr-7 bg-forestgreen mx-7 my-3 rounded-tr-3xl rounded-bl-3xl align-middle"}>
                <CreateLogButton setLastLog={setLastLogFunction}/>
            </div>
            <div className={"flex flex-wrap"}>
                <div className={"w-2/3 flex flex-row flex-wrap justify-center"}>
                    {
                        logs && logs.map((log: Log) => <LogEntry log={log} key={log.id}/>)
                    }
                    {
                        logs.length === 0 && !loading &&
                        (<div>
                            <h1 className={"text-3xl text-center"}>no logs found; go and write some</h1>
                        </div>)
                    }
                </div>
                <LogSummaryGenerator/>
            </div>
        </>
    )
}