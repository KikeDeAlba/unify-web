import { TwitchService } from "@/services/twicth/twitch.controller";

export const getTwitchClient = () => new TwitchService()