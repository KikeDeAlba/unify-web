import type { PAside } from "./aside";
import { BarChartIcon, BotIcon, SettingsIcon } from "lucide-react";

export const AsideRoutes: PAside["routes"] = [
	{ name: "Analytics", href: "#", Icon: () => <BarChartIcon /> },
	{
		name: "Alerts",
		Icon: () => <SettingsIcon />,
		subRoutes: [
			{
				name: "Stream events",
				Icon: () => <SettingsIcon />,
				href: "/dashboard/alerts/stream",
			},
			{
				name: "Channel Points",
				Icon: () => <SettingsIcon />,
				href: "/dashboard/alerts/channel-points",
			},
		],
	},
	{
		name: "Bot",
		Icon: () => <BotIcon />,
		subRoutes: [
			{
				name: "Settings",
				Icon: () => <SettingsIcon />,
				href: "/dashboard/bot/settings",
			},
			{
				name: "Commands",
				Icon: () => <SettingsIcon />,
				href: "/dashboard/bot/commands",
			},
		],
	},
	{
		name: "Text to Speech",
		Icon: () => <SettingsIcon />,
		href: "/dashboard/tts",
	},
];
