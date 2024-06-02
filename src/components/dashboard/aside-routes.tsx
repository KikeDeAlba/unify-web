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
		name: "Commands",
		icon: <BotIcon />,
		href: "/dashboard/commands",
	},
	{
		name: "Text to Speech",
		icon: <SettingsIcon />,
		href: "/dashboard/tts",
	},
];
