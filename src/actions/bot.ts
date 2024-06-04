'use server'

import { getTwitchAccessToken, getTwitchUserInfo } from "@/actions/twitch"
import { revalidatePath } from "next/cache"

const API = 'https://vps.focograficomx.com/unify'

export const joinChannel = async () => {
    const twitchAuth = await getTwitchAccessToken()

    const res = await fetch(`${API}/channels/join`, {
        headers: {
            Cookie: `twitch-auth=${twitchAuth}`
        }
    })

    if (!res.ok) {
        throw new Error(res.statusText)
    }
}

export const leaveChannel = async () => {
    const twitchAuth = await getTwitchAccessToken()

    const res = await fetch(`${API}/channels/part`, {
        headers: {
            Cookie: `twitch-auth=${twitchAuth}`
        }
    })

    if (!res.ok) {
        throw new Error(res.statusText)
    }
}

export const isListening = async () => {
    const userInfo = await getTwitchUserInfo()

    const res = await fetch(`${API}/channels/listening/${userInfo.login}`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

export const addCommandFromForm = async (formData: FormData) => {
    const code = formData.get('code') as string
    const command = formData.get('command') as string

    await addCommand(command, '', code)

    revalidatePath('/dashboard/commands')
}

export const addCommand = async (command: string, description: string, code: string) => {
    const twitchAuth = await getTwitchAccessToken()

    const res = await fetch(`${API}/channels/command`, {
        method: 'POST',
        body: JSON.stringify({
            command,
            description,
            code
        }),
        headers: {
            'Content-Type': 'application/json',
            Cookie: `twitch-auth=${twitchAuth}`
        }
    })

    if (!res.ok) {
        throw new Error(res.statusText)
    }
}

export const removeCommand = async (command: string) => {
    const twitchAuth = await getTwitchAccessToken()

    const res = await fetch(`${API}/channels/command/${command}`, {
        method: 'DELETE',
        headers: {
            Cookie: `twitch-auth=${twitchAuth}`
        }
    })

    if (!res.ok) {
        throw new Error(res.statusText)
    }
}

export const getCommands = async () => {
    const twitchAuth = await getTwitchAccessToken()

    const res = await fetch(`${API}/channels/commands`, {
        headers: {
            Cookie: `twitch-auth=${twitchAuth}`
        }
    })

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const json = await res.json()

    return json
}