export default function Home() {
    return (
        <div>
            <div className={"clear-both justify-content-center align-items-center text-center"}>
                <h1 className={"text-8xl p-4 text-center"}>
                    logwork
                </h1>
                <h2 className={"text-2xl p-4 text-center"}>
                    like a worklog but backwards
                </h2>
                <p className={"text-xs text-right -rotate-3 p-3 m-2"}>
                    the precursor to <a href={"https://tasktree.gbtsui.dev"} className={"text-foreground"}>tasktree</a>!
                </p>
            </div>
            <div className={"page p-2 text-center mt-1"}>
                <p className={"text-lg"}>
                    logwork is a minimalist, plant-based to-do list for your day.
                </p>
                <p className={"text-sm"}>
                    this is also a practice project for me to learn more stuff about frontend development,
                    before i tackle the beast that is my main project management project.
                    0.0
                </p>
            </div>
        </div>
    );
}
