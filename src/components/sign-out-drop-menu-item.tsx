"use client";

import { signOutTwitch } from "@/actions/twitch";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export const SignOutDropMenuItem = () => {
	return (
		<DropdownMenuItem
			className="cursor-pointer"
			onClick={() => {
				signOutTwitch("/");
			}}
		>
			Logout
		</DropdownMenuItem>
	);
};
