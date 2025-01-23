import {create} from "zustand"
import {Log, LogSummary} from "@prisma/client"
import getSession from "@/app/utils/authentication/getSession";
import getLogList from "@/app/utils/database/getLogList";

interface LogStore {
    logs: Log[],
    addLog: (log: Log) => void,
    deleteLog: (log: Log) => void,

    logSummaries: LogSummary[],

    addLogSummary: (logSummary: LogSummary) => void,

    fetchLogList: () => Promise<void | Error>,
    fetchLogSummaryList: () => Promise<void | Error>,
}

export const useLogStore = create<LogStore>((set) => ({
    logs: [],
    addLog: (log: Log) => set((state) => ({logs: [log, ...state.logs]})),
    deleteLog: (log: Log) => set((state) => ({
        logs: [...state.logs.filter((existingLog) => existingLog.id !== log.id)],
    })),

    logSummaries: [],
    addLogSummary: (logSummary: LogSummary) => set((state) => ({logSummaries: [...state.logSummaries, logSummary]})),

    fetchLogList: async () => {
        const session = await getSession()
        const username = session?.user?.name
        const logList = await getLogList(username as string)

        if (logList instanceof Error) {
            return logList
        }

        return set({logs: logList})
    },
    fetchLogSummaryList: async () => {
        console.log("not implemented yet")
    },
}))