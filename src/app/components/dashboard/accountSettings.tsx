"use client"

import {signOut} from "next-auth/react";
import {redirect} from "next/navigation";
import Modal from "@/app/components/universal/modal";
import {useState} from "react";
import deleteUser from "@/app/utils/database/deleteUser";
import getSession from "@/app/utils/authentication/getSession";
import changePassword from "@/app/utils/database/changePassword";

export default function AccountSettings() {
    const [deleteAccountIsOpen, setDeleteAccountIsOpen] = useState(false);
    const [changePasswordIsOpen, setChangePasswordIsOpen] = useState(false);
    const [deleteMeText, setDeleteMeText] = useState("");

    const [passwordText, setPasswordText] = useState("");
    const [confirmationText, setConfirmationText] = useState("");


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
            <Modal isOpen={changePasswordIsOpen} onClose={() => setChangePasswordIsOpen(false)} title={"change password"}>
                <form className={"justify-items-center"} action={async (formData) => {
                    const session = await getSession()
                    const result = await changePassword({
                        email: session?.user?.email as string,
                        old_password: formData.get("current-password") as string,
                        new_password: formData.get("new-password") as string
                    })
                    if (result instanceof Error) {
                        console.log(result)
                    } else {
                        setChangePasswordIsOpen(false)
                    }
                }}>
                    <div>
                        <label>current password</label><br/>
                        <input name={"current-password"} type={"password"}
                               className={"text-darkforestgreen bg-eggshell rounded-tr-lg rounded-bl-lg"}/>
                    </div>
                    <div>
                        <label>new password</label><br/>
                        <input name={"new-password"} type={"password"}
                               className={"text-darkforestgreen bg-eggshell rounded-tr-lg rounded-bl-lg"}
                                onChange={(e) => {setPasswordText(e.target.value)}}/>
                    </div>
                    <div>
                        <label>confirm new password</label><br/>
                        <input name={"new-password-confirm"} type={"password"}
                               className={"text-darkforestgreen bg-eggshell rounded-tr-lg rounded-bl-lg"}
                                onChange={(e) => {setConfirmationText(e.target.value)}}/>
                    </div>
                    <div>
                        <input type={"submit"} name={"change-password"} value={"change password"}
                               className={"mt-3 p-3 bg-cream text-darkforestgreen disabled:bg-darkforestgreen disabled:text-gray-400 hover:p-5 disabled:hover:p-3 transition-all rounded-bl-xl rounded-tr-xl"}
                               disabled={!(confirmationText === passwordText && confirmationText.length > 0)}/>
                    </div>

                </form>
            </Modal>
            <div className={"bg-forestgreen rounded-tr-3xl rounded-bl-3xl p-5 w-3/4 justify-self-center my-3"}>
                <div className="p-5 text-center">
                    <h1 className={"text-4xl"}>account settings</h1>
                </div>
                <div className={"flex justify-evenly"}>
                    <button
                        className={"bg-darkforestgreen hover:bg-cream hover:text-darkforestgreen hover:p-5 rounded-bl-lg rounded-tr-lg text-eggshell p-4 text-xl transition-all"}
                        onClick={() => setChangePasswordIsOpen(true)}>change password
                    </button>
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
                    more options coming soon (change dueSoon settings)
                </div>
            </div>
        </>
    )
}