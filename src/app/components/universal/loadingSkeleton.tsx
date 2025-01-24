import {useEffect, useState} from "react";
import randomLoadingText from "../../../../public/funsies/loadingTexts";


export default function LoadingSkeleton() {
    let [loadingText, setLoadingText] = useState("");

    useEffect(() => {
        setLoadingText(randomLoadingText())
    }, [setLoadingText]);

    return (
        <div className={"text-3xl text-center"}>
            <h1>loading...</h1>
            <h2 className={"text-xl"}>{loadingText}</h2>
        </div>
    )
}