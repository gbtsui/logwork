"use client";

import createUser from "@/app/utils/database/createUser";
import {useState} from "react";
import {signIn} from "next-auth/react";

export default function SignupPage() {
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [loginMode, setLoginMode] = useState<boolean>(true);

    function create(formData: FormData) {
        setLoading(true)
        console.log("set loading")
        const getResult = async () => {
            const result = await createUser({username: formData.get("username") as string, password: formData.get("password") as string, email: formData.get("email") as string})
            console.log(result)
            if (result instanceof Error) {
                setError(result);
            } else {
                return
            }
        }
        getResult();
        setLoading(false)
    }

    function login(formData: FormData) {
        setLoading(true)
        console.log("login")
        setLoading(false)
    }

    return (
        <div className={"justify-items-center "}>
            <h1 className="text-9xl p-5 m-3">entry point</h1>
            <div className="flex justify-space-between">
                <button onClick={() => setLoginMode(true)} className={`p-3 mx-2 ${loginMode? "bg-forestgreen rounded-tr-3xl rounded-b-md":"bg-darkforestgreen"}`}>
                    login
                </button>
                <button onClick={() => setLoginMode(false)} className={`p-3 mx-2 ${loginMode? "bg-darkforestgreen":"bg-forestgreen rounded-tr-3xl rounded-b-md"}`}>
                    signup
                </button>
            </div>
            {loginMode ? (
                <div className={"bg-forestgreen p-10 rounded-tr-3xl rounded-bl-3xl"}>
                    <form action={login} className={"justify-items-center text-center text-xl"}>
                        <div className={"text-4xl"}>
                            login
                        </div>
                        <div className={"rotate-2"}>
                            <label>email</label><br/>
                            <input name="email" type="email" required
                                   className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                        </div>
                        <div className={"-rotate-3"}>
                            <label>password</label><br/>
                            <input name="password" type="password" required
                                   className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                        </div>

                        <div className={"hover:-rotate-4"}>
                            <input type="submit" value={loading ? "loading..." : "login"}
                                   className={"p-3 text-darkforestgreen text-xl bg-eggshell hover:bg-forestgreen hover:text-eggshell hover:p-5 transition-all mt-7 rounded-bl-xl rounded-tr-xl disabled:hover:p-3"}
                                   disabled={loading}/>

                        </div>
                    </form>
                    <div>
                        {
                            /*
                            process.env.NODE_ENV == "development" &&
                            <div>
                                <button onClick={() => {
                                    setError(new Error("BETTER_THAN_YOUR_ERROR_SYSTEM"))
                                }}>better than your error system
                                </button>
                                <br/>
                                <button onClick={() => {
                                    setError(null)
                                }}>worse than your error system
                                </button>
                            </div>

                             */
                        }
                        <label className={"text-red-500"}>{error ? <p>Error: {error.message}</p> : null}</label>
                    </div>
                </div>
            ) : (

                <div className={"bg-forestgreen p-10 rounded-tr-3xl rounded-bl-3xl"}>
                    <form action={create} className={"justify-items-center text-center text-xl"}>
                        <div className={"text-4xl"}>
                            signup
                        </div>
                        <div className={"-rotate-1"}>
                            <label>email</label><br/>
                            <input name="email" type="email" required
                                   className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                        </div>
                        <div className={"rotate-2"}>
                            <label>username</label><br/>
                            <input name="username" type="text" required
                                   className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                        </div>
                        <div className={"rotate-2"}>
                            <label>password</label><br/>
                            <input name="password" type="password" required
                                   className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                        </div>

                        <div className={"hover:-rotate-4"}>
                            <input type="submit" value={loading ? "loading..." : "signup"}
                                   className={"p-3 text-darkforestgreen text-xl bg-eggshell hover:bg-forestgreen hover:text-eggshell hover:p-5 transition-all mt-7 rounded-bl-xl rounded-tr-xl disabled:hover:p-3"}
                                   disabled={loading}/>

                        </div>
                    </form>
                    <div>
                        {
                            /*
                            process.env.NODE_ENV == "development"?
                            <div>
                                <button onClick={() => {
                                    setError(new Error("BETTER_THAN_YOUR_ERROR_SYSTEM"))
                                }}>better than your error system
                                </button>
                                <br/>
                                <button onClick={() => {
                                    setError(null)
                                }}>worse than your error system
                                </button>
                            </div> : null

                             */
                        }
                        <label className={"text-red-500"}>{error ? <p className={"max-w-fit"}>Error: {error.message}</p> : null}</label>
                    </div>
                </div>
            )}
        </div>
    )
}