'use client'

import { getTwitchUserInfo } from "@/actions/twitch";
import { TwitchService } from "@/services/twicth/twitch.controller";
import type tmi from "tmi.js";

export const getTwitchClient = () => new TwitchService();

export const listenChat = (
    cb: (props: { tags: tmi.ChatUserstate; message: string }) => void,
) => {
    const twitchClient = getTwitchClient();

    getTwitchUserInfo().then(user => {
        console.log(user);

        twitchClient.listenChat(user.login, cb)
    })
};
