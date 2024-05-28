import { DropDownHeader } from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { BarChartIcon, FileTextIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="grid min-h-screen w-full grid-cols-[280px_1fr] overflow-hidden">
			<aside className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
				<div className="flex h-[60px] items-center px-6">
					<Link className="flex items-center gap-2 font-semibold" href="#">
						<img
							alt="TwitchBot Logo"
							height={24}
							src="/placeholder.svg"
							style={{
								aspectRatio: "24/24",
								objectFit: "cover",
							}}
							width={24}
						/>
						<span>TwitchBot</span>
					</Link>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-4 text-sm font-medium">
						<Link
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
							href="#"
						>
							<BarChartIcon className="h-4 w-4" />
							Analytics
						</Link>
						<Link
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
							href="#"
						>
							<SettingsIcon className="h-4 w-4" />
							Settings
						</Link>
						<Link
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
							href="#"
						>
							<FileTextIcon className="h-4 w-4" />
							Logs
						</Link>
					</nav>
				</div>
			</aside>
			<div className="flex flex-col">
				<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
					<div className="flex-1">
						<h1 className="font-semibold text-lg">TwitchBot Dashboard</h1>
					</div>
					<DropDownHeader />
				</header>
				{children}
			</div>
		</div>
	);
}
