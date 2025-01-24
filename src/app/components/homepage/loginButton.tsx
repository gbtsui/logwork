"use client"

import {startTransition, useActionState, useEffect, useRef} from "react";
import Link from "next/link";
import getSession from "@/app/utils/authentication/getSession"

function useOnceOnMount(fn: Function) {
    const ran = useRef(false)
    useEffect(() => {
        if (!ran.current) {
            fn();
            ran.current = true;
        }
    })
}

export default function LoginButton() {
    const [session, sessionAction, isPending] = useActionState(getSession, null);

    useOnceOnMount(async () => {
        try {
            startTransition(() => {
                sessionAction()
            })
        } catch (err) {
            console.error(err);
        }
    })

    return (

        <div className={"text-center text-2xl min-h-25 max-h-25"}>
            {isPending && (
                <div className={"text-xs"}>loading...</div>
            )}
            {session && (
                <div className={"text-darkforestgreen"}>
                    <p className={"mb-3 text-cream"}>welcome, {session?.user?.name}!</p>
                    <Link href={"/dashboard"} passHref
                          className={"bg-foreground text-background p-3 rounded-bl-lg rounded-tr-lg"}>dashboard</Link>
                </div>
            )}
            {!session && (
                <div>
                    <Link href={"/api/auth/signin"} passHref
                          className={"bg-foreground text-background p-3 rounded-bl-lg rounded-tr-lg"}>login/sign
                        up</Link>
                    <p className={"text-xs mt-5"}>haha, get it? log-in? it's funny. please laugh</p>
                </div>
            )}
        </div>


    )
}
// i have no idea what im doing
