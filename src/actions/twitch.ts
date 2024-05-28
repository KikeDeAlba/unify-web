'use server'

import { TwitchService } from "@/services/twicth/twitch.controller"
import { AUTH_CALLBACKS } from "@/utils/data";
import { deleteCookie, getCookie } from "./cookies";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const getTwitchClient = async () => new TwitchService()

export const getTwitchAuthUrl = async () => {
    const twitchClient = await getTwitchClient();

    return twitchClient.getAuthUrl(AUTH_CALLBACKS.twitch)
}

export const getTwitchAccessToken = async () => {
    const token = await getCookie('twitch-auth')

    if (!token) {
        throw new Error('No token found')
    }

    return token.value
}

export const getTwitchUserId = async () => {
    const token = await getTwitchAccessToken()

    const twitchClient = await getTwitchClient()

    const userInfo = await twitchClient.validateToken(token)

    return userInfo.user_id
}

export const getTwitchChannelInfo = async () => {
    const twitchClient = await getTwitchClient();

    const userId = await getTwitchUserId()
    const token = await getTwitchAccessToken()

    const userInfo = await twitchClient.getChannelInfo(userId, token)

    return userInfo
}

export const getTwitchUserInfo = async () => {
    const twitchClient = await getTwitchClient();

    const userId = await getTwitchUserId()
    const token = await getTwitchAccessToken()

    const userInfo = await twitchClient.getUserInfo(userId, token)

    return userInfo
}

export const signOutTwitch = async (redirectUri?: string) => {
    await deleteCookie('twitch-auth')

    if (redirectUri) {
        revalidatePath(redirectUri)
        redirect(redirectUri)
    }
}