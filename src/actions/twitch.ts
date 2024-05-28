'use server'

import { TwitchService } from "@/services/twicth/twitch.controller"


export const getTwitchClient = async () => new TwitchService()