"use client"

import React from "react";
import createTask from "@/app/utils/database/createTask";
import {useTaskStore} from "@/app/utils/store/taskStore";
import CloseButton from "@/app/components/universal/closeButton";

export default function CreateTaskButton() {
    const [isOpen, setIsOpen] = React.useState(false);

    const addTask = useTaskStore((state) => state.addTask);

    function create(formData: FormData) {
        console.log("create function called")
        const getResult = async () => {
            const result = await createTask(formData);
            console.log("task created");
            addTask(result);
            console.log("task added to zustand")
        }
        getResult();
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className={"text-center text-darkforestgreen bg-cream p-3 text-3xl rounded-tr-3xl rounded-bl-3xl"}>
                <span>+ new task</span>
            </button>

            {isOpen &&
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 overflow-hidden h-screen w-full flex items-center justify-center z-50">
                    <div className="p-6 bg-background rounded-tr-3xl rounded-bl-3xl shadow-lg w-96 overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">create task</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                                &times;
                            </button>
                        </div>
                        <form action={(e) => {
                            create(e);
                            setIsOpen(false)
                        }} className={"text-background m-2 justify-end"}>
                            <div className="space-y-4 my-5">
                                <div>
                                    <label className={"text-cream"}>task name</label><br/>
                                    <input name={"task_name"} type="text" required maxLength={255}
                                           className={"rounded-bl-lg rounded-tr-lg p-0.5"}></input>
                                </div>
                                <div>
                                    <label className={"text-cream"}>task description</label><br/>
                                    <textarea name={"task_description"} rows={4} cols={30} required maxLength={1023}
                                              className={"rounded-bl-lg rounded-tr-lg p-0.5"}/>
                                </div>
                                <div>
                                    <label className={"text-cream"}>due date</label><br/>
                                    <input name={"due_at"} type={"datetime-local"} defaultValue={Date.now()} required
                                           className={"rounded-bl-lg rounded-tr-lg p-0.5"}/>
                                </div>
                            </div>
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