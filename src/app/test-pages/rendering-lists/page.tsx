"use client"
import {create} from "zustand"

const useTestStore = create((set) => ({
    objects: [],
    addObject: (newObject: string) => set((state) => ({objects: [...state.objects, newObject]})),
    clearObjects: () => set(() => ({objects: []})),
}))


export default function RenderingList() {
    //const session = await getSession()
    //const user_id = session?.user?.id //shut up typescript :sob:

    //const tasks = (await getTaskList(user_id)).sort((a, b) => a.id - b.id)


    const objects = useTestStore((state) => state.objects);
    const addObject = useTestStore((state) => state.addObject);
    const clearObjects = useTestStore((state) => state.clearObjects);

    function addObjectFromForm(formData) {
        const objectInput = formData.get("add-object-input");
        addObject(objectInput);
    }

    return (
        <div key={"root"}>
            {
                process.env.NODE_ENV === "production" && (
                    <div className={"p-2 m-2 text-2xl"}>
                        you're not supposed to see this, but this is for my own debugging reference sometimes.
                    </div>
                )
            }

            <form action={addObjectFromForm}>
                <input
                    type="text"
                    key={"add-object-input"}
                    name={"add-object-input"}
                    className={"m-2 text-background"}
                />
                <input type={"submit"} value={"add to store"}/>
            </form>
            <input type={"button"} onClick={clearObjects} value={"clear store"}/>
            <div className="m-2 flex flex-wrap justify-center" key={"box"}>
                {
                    objects && objects.length > 0 &&
                    objects.map((object: string, index: number) => {
                            return (
                                <div key={index} className={"border-2 w-1/5 m-3 overflow-auto border-white p-3 rounded-lg"}>
                                    <p>{object}</p>
                                    <p>{index}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}