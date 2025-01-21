"use client"

import {signOut} from "next-auth/react";
import {redirect} from "next/navigation";

export default function AccountSettings() {
    return (
        <div className={"bg-forestgreen rounded-tr-3xl rounded-bl-3xl p-5 w-3/4 justify-self-center my-3"}>
            <div className="p-5 text-center">
                <h1 className={"text-4xl"}>account settings</h1>
            </div>
            <div>
                <button className={"bg-darkforestgreen hover:bg-red-500 hover:p-5 rounded-bl-lg rounded-tr-lg text-eggshell p-4 text-xl transition-all"}
                    onClick={async () => {
                        await signOut()
                        redirect("/entry")
                    }}>logout</button>
            </div>
            <div>
                more options coming soon (delete account, change password, change dueSoon settings)
            </div>
        </div>
    )
}