import type { PAside } from "./aside";
import { BarChartIcon, BotIcon, SettingsIcon } from "lucide-react";

export const AsideRoutes: PAside["routes"] = [
	{ name: "Analytics", href: "#", icon: <BarChartIcon /> },
	{
		name: "Alerts",
		icon: <SettingsIcon />,
		subRoutes: [
			{
				name: "Stream events",
				icon: <SettingsIcon />,
				href: "/dashboard/alerts/stream",
			},
			{
				name: "Channel Points",
				icon: <SettingsIcon />,
				href: "/dashboard/alerts/channel-points",
			},
		],
	},
	{
		name: "Bot",
		icon: <BotIcon />,
		subRoutes: [
			{
				name: "Settings",
				icon: <SettingsIcon />,
				href: "/dashboard/bot/settings",
			},
			{
				name: "Commands",
				icon: <SettingsIcon />,
				href: "/dashboard/bot/commands",
			},
		],
	},
	{
		name: "Text to Speech",
		icon: <SettingsIcon />,
		href: "/dashboard/tts",
	},
];
