import type { RValidateToken } from "./twitch.types";

export class TwitchService {
    getAuthUrl(redirectUri: string) {
        const scopes = ["channel:read:subscriptions"];

        const authUrl = "https://id.twitch.tv/oauth2/authorize";
        const url = new URL(authUrl);
        url.searchParams.set("client_id", process.env.TWITCH_CLIENT_ID ?? "");
        url.searchParams.set("redirect_uri", redirectUri);
        url.searchParams.set("response_type", "token");
        url.searchParams.set("scope", scopes.join(" "));
        return url.toString();
    }

    async validateToken(token: string) {
        const validateUrl = "https://id.twitch.tv/oauth2/validate";

        const headers = new Headers();
        headers.append("Authorization", `OAuth ${token}`);

        const response = await fetch(validateUrl, {
            method: "GET",
            headers,
        });

        if (!response.ok) {
            throw new Error("Invalid token");
        }

        const data = (await response.json()) as RValidateToken;

        return data
    }
}
