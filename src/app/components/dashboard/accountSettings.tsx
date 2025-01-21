"use client"

import {signOut} from "next-auth/react";
import {redirect} from "next/navigation";
import Modal from "@/app/components/universal/modal";
import {useState} from "react";
import deleteUser from "@/app/utils/database/deleteUser";
import getSession from "@/app/utils/authentication/getSession";

export default function AccountSettings() {
    const [deleteAccountIsOpen, setDeleteAccountIsOpen] = useState(false);
    const [deleteMeText, setDeleteMeText] = useState("");

    return (
        <>
            <Modal isOpen={deleteAccountIsOpen} onClose={() => setDeleteAccountIsOpen(false)} title={"delete account?"}>
                <p>are you sure you want to delete your account? you can't undo this!</p>
                <form className={"justify-items-center"} action={async (formData) => {
                    const session = await getSession()
                    const username = session?.user?.name
                    const result = await deleteUser(username as string, formData.get("password") as string)
                    if (result == null) {
                        await signOut()
                    }
                }}>
                    <div>
                        <label>password</label><br/>
                        <input name="password" type={"password"} className={"text-darkforestgreen bg-eggshell rounded-tr-lg rounded-bl-lg"}/>
                    </div>
                    <div>
                        <label>type "DELETE ME"</label><br/>
                        <input type={"text"} className={"text-darkforestgreen bg-eggshell rounded-tr-lg rounded-bl-lg"} onChange={(e) => setDeleteMeText(e.target.value)}/>
                    </div>
                    <div>
                        {
                            deleteMeText === "DELETE ME" &&
                            <input type={"submit"} value={"yes, i'm sure i want to delete :("}
                                   className={"p-3 mt-4 bg-cream text-darkforestgreen hover:text-cream hover:bg-red-500 hover:p-5 transition-all rounded-tr-2xl rounded-bl-2xl"}/>
                        }
                    </div>
                </form>
            </Modal>
            <div className={"bg-forestgreen rounded-tr-3xl rounded-bl-3xl p-5 w-3/4 justify-self-center my-3"}>
                <div className="p-5 text-center">
                <h1 className={"text-4xl"}>account settings</h1>
            </div>
            <div className={"flex justify-evenly"}>
                <button
                    className={"bg-darkforestgreen hover:bg-red-500 hover:p-5 rounded-bl-lg rounded-tr-lg text-eggshell p-4 text-xl transition-all"}
                    onClick={async () => {
                        await signOut()
                        redirect("/entry")
                    }}>logout
                </button>
                <button
                    className={"bg-red-500 hover:bg-red-800 hover:p-5 rounded-bl-lg rounded-tr-lg text-eggshell p-4 text-xl transition-all"}
                    onClick={() => setDeleteAccountIsOpen(true)}>delete account
                </button>
            </div>
            <div>
                more options coming soon (change password, change dueSoon settings)
            </div>
        </div>
        </>
    )
}