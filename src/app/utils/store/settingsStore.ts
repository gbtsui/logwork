import {create} from "zustand";
import {UserSettings} from "@prisma/client";
import getSession from "@/app/utils/authentication/getSession";
import getUserSettings from "@/app/utils/database/getUserSettings";

interface SettingsStore {
    settings: UserSettings;
    setSettings: (new_settings: UserSettings) => void;
    fetchSettings: () => Promise<void>;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
    settings: {},
    setSettings: (new_settings: UserSettings) => set({settings: new_settings}),
    fetchSettings: async () => {
        const session = await getSession();
        const username = session?.user?.name;
        const newSettings = await getUserSettings(username as string);

        return set({settings: newSettings});
    }
}))