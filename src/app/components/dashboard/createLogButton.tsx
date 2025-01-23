"use client"

import React, {useState} from "react";
import {useLogStore} from "@/app/utils/store/logStore";
import createLog from "@/app/utils/database/createLog";
import CloseButton from "@/app/components/universal/closeButton";

export default function CreateLogButton({setLastLog}: { setLastLog: (date: Date) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");

    const addLog = useLogStore((state) => state.addLog);

    function create(formData: FormData) {
        const getResult = async () => {
            const result = await createLog(formData);
            console.log("log created")
            addLog(result)
            console.log("log added to zustand")
        }
        getResult();
        setLastLog(new Date(Date.now()))
    }

    return (
        <>
            <button onClick={() => {
                setIsOpen(true);
                setError("")
            }}
                    className={"text-center text-darkforestgreen bg-cream p-3 text-3xl rounded-tr-3xl rounded-bl-3xl"}>
                <span>+ new log</span>
            </button>

            {
                isOpen &&
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 overflow-hidden h-screen w-full flex items-center justify-center z-50">
                    <div className="p-6 bg-background rounded-tr-3xl rounded-bl-3xl shadow-lg w-96 overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl">create log</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                                &times;
                            </button>
                        </div>
                        <form action={(e) => {
                            if (e.get("time_minutes") as unknown as number == 0 && e.get("time_hours") as unknown as number == 0) {
                                setError("you can't log 0 minutes of work! do more stuff smh")
                                return
                            }

                            create(e)
                            setIsOpen(false)
                        }} className={"text-background m-2 justify-end"}>
                            <div className={"space-y-4 my-5"}>
                                <div>
                                    <label className={"text-cream text-xl"}>time spent</label><br/>
                                    <input name={"time_hours"} type={"number"}
                                           className={"w-10 mr-0.5 bg-eggshell rounded-tr-lg rounded-bl-lg text-right"}
                                           required min={0} max={9} defaultValue={1}/>
                                    <span className={"text-cream my-2"}>h</span>
                                    <input name={"time_minutes"} type={"number"}
                                           className={"w-10 mr-0.5 bg-eggshell rounded-tr-lg rounded-bl-lg text-right"}
                                           required min={0} max={59} defaultValue={0}/>
                                    <span className={"text-cream my-2"}>m</span>
                                </div>
                                <div>
                                    <label className={"text-cream text-xl"}>what did you do?</label><br/>
                                    <textarea name={"log_content"} rows={6} cols={30} maxLength={1000}
                                              className={"rounded-bl-lg rounded-tr-lg p-0.5 bg-eggshell"} required/>
                                </div>
                                <div className={"w-full"}>
                                    <label className={"text-cream text-xl"}>how productive did you feel?</label>
                                    <input type={"range"} required min={1} max={10} name={"productivity"}
                                           className={"bg-darkforestgreen slider w-full appearance-none rounded-bl-lg rounded-tr-lg h-2"}/>
                                </div>
                            </div>
                            {
                                error &&
                                <div className={"w-full bg-red-500 text-eggshell p-3 rounded-bl-lg rounded-tr-lg"}>
                                    {error}
                                </div>
                            }
                            <div className="flex justify-evenly space-x-2 pt-4">
                                <input name={"submit"} type={"submit"} value={"create"}
                                       className={"px-4 py-2 bg-cream text-background rounded-bl-lg rounded-tr-lg hover:bg-eggshell hover:text-darkforestgreen hover:px-5 hover:py-3 transition-all"}/>
                                <CloseButton onClose={() => setIsOpen(false)}/>
                            </div>
                        </form>
                    </div>
                </div>

            }
        </>
    )
}