"use client"
import TaskList from "@/app/components/dashboard/taskList";
import {useEffect, useState} from "react";
import AccountSettings from "@/app/components/dashboard/accountSettings";
import {useSettingsStore} from "@/app/utils/store/settingsStore";
import LogList from "@/app/components/dashboard/logList";


export default function DashboardContainer() {
    const [mode, setMode] = useState<string>("tasks")

    const fetchSettings = useSettingsStore((state) => state.fetchSettings);

    useEffect(() => {
        const initialize = async () => {
            try {
                await fetchSettings()
            } catch (error) {
                console.error(error);
            }
        }
        initialize();
    })


    return (
        <div>
            <h1 className={"text-7xl text-center p-3 m-3"}>
                dashboard
            </h1>
            <div className={"text-xl text-center p-3 flex justify-evenly"}>
                <button onClick={() => setMode("tasks")}
                        className={`p-2 rounded-tr-lg rounded-bl-lg ${mode == "tasks" ? "bg-darkforestgreen underline" : "bg-forestgreen"}`}>tasks
                </button>
                <button onClick={() => setMode("logs")}
                        className={`p-2 rounded-tr-lg rounded-bl-lg ${mode == "logs" ? "bg-darkforestgreen underline" : "bg-forestgreen"}`}>logs
                </button>
                <button onClick={() => setMode("settings")}
                        className={`p-2 rounded-tr-lg rounded-bl-lg ${mode == "settings" ? "bg-darkforestgreen underline" : "bg-forestgreen"}`}>settings
                </button>

            </div>
            {
                mode === "tasks" && <TaskList/>
            }
            {
                mode === "settings" && <AccountSettings/>
            }
            {
                mode === "logs" && <LogList/>
            }
        </div>
    )
}