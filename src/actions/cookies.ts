"use server";

import { cookies } from "next/headers";
import type { PSetCookies } from "./cookies.types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const setCookies = (props: PSetCookies, redirectUri?: string) => {
    const cookiesStore = cookies()

    for (const [key, value] of Object.entries(props)) {
        cookiesStore.set(key, value)
    }

    if (redirectUri) {
        revalidatePath(redirectUri)
        redirect(redirectUri)
    }
};

export const getCookie = async (name: string) => {
    const cookiesStore = cookies()
    return cookiesStore.get(name)
}