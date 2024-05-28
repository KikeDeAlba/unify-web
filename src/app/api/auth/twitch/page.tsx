"use client";

import { setCookies } from "@/actions/cookies";
import { useEffect } from "react";

export default function TwitchAuth() {
	useEffect(() => {
		const hash = window.location.hash.substring(1);
		const params = new URLSearchParams(hash);

		if (params.has("access_token")) {
			setCookies(
				{
					"twitch-auth": params.get("access_token") ?? "",
				},
				"/dashboard",
			);
		}
	}, []);

	return <div>Hello from twitch auth</div>;
}
