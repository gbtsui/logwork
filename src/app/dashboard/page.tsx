"use server"
import getTaskList from "@/app/utils/database/getTaskList";
import getSession from "@/app/utils/authentication/getSession";
import DashboardContainer from "@/app/components/dashboard/dashboardContainer";

export default async function Dashboard() {
    const session = await getSession()
    const user_id = session?.user?.id //shut up typescript :sob:

    const tasks = (await getTaskList(user_id)).sort((a, b) => a.id - b.id)
    return (
        <div>
            <DashboardContainer/>
        </div>
    )
}