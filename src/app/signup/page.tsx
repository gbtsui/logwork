"use client";

import createUser from "@/app/utils/database/createUser";
import {useState} from "react";

export default function SignupPage() {
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    function create(formData: FormData) {
        setLoading(true)
        console.log("set loading")
        const getResult = async () => {
            //const result = await createUser({username: formData.get("username") as string, password: formData.get("password") as string, email: formData.get("email") as string})
            //console.log(result)
            //if (result instanceof Error) {
            //    setError(result);
            //} else {
            //    return
            //}
        }
        getResult();
        setLoading(false)
    }

    return (
        <div className={"justify-items-center"}>
            <h1 className="text-9xl p-5 m-3">sign up</h1>
            <form action={create} className={"justify-items-center text-center text-xl"}>
                <div className={"rotate-2"}>
                    <label>email</label><br/>
                    <input name="email" type="email" required className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                </div>
                <div className={"-rotate-1"}>
                    <label>username</label><br/>
                    <input name="username" type="text" required className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                </div>
                <div className={"rotate-3"}>
                    <label>password</label><br/>
                    <input name="password" type="password" required className={"text-darkforestgreen bg-cream rounded-tr-lg rounded-bl-lg"}/>
                </div>

                <div className={"hover:-rotate-4"}>
                        <input type="submit" value="sign up"
                               className={"p-3 text-darkforestgreen text-xl bg-eggshell hover:bg-forestgreen hover:text-eggshell hover:p-5 transition-all mt-7 rounded-bl-xl rounded-tr-xl"}
                        disabled={loading}/>

                </div>
            </form>
            <div>
                {
                    process.env.NODE_ENV == "development" &&
                    <div>
                        <button onClick={() => {
                            setError(new Error("BETTER_THAN_YOUR_ERROR_SYSTEM"))
                        }}>better than your error system
                        </button><br/>
                        <button onClick={() => {
                            setError(null)
                        }}>worse than your error system
                        </button>
                    </div>
                }
                <label className={"text-red-500"}>{error ? <p>Error: {error.message}</p> : null}</label>
            </div>
        </div>
    )
}