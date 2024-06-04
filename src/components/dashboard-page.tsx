/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KMnzsQtykur
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { joinChannel } from "@/actions/bot";

export function DashboardPage() {
	joinChannel()
		.then(() => {
			console.log("joined");
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Viewer Count</CardTitle>
						<CardDescription>Current number of viewers</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">1,234</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Active Chatters</CardTitle>
						<CardDescription>Number of active chatters</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">567</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Recent Events</CardTitle>
						<CardDescription>Latest events from the channel</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<TwitchIcon className="h-5 w-5 text-purple-500" />
								<div>
									<p className="font-medium">New Follower</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										@username
									</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<TwitchIcon className="h-5 w-5 text-purple-500" />
								<div>
									<p className="font-medium">Subscription Renewed</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										@username
									</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<TwitchIcon className="h-5 w-5 text-purple-500" />
								<div>
									<p className="font-medium">Raid Received</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										@username
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Bot Settings</CardTitle>
						<CardDescription>Manage your bot settings</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="grid gap-1">
								<Label htmlFor="command-prefix">Command Prefix</Label>
								<Input defaultValue="!" id="command-prefix" />
							</div>
							<div className="grid gap-1">
								<Label htmlFor="auto-reply">Auto-Reply Message</Label>
								<Textarea id="auto-reply" rows={3} />
							</div>
							<Button variant="outline">Save Settings</Button>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Logs</CardTitle>
						<CardDescription>View your {"bot's"} activity logs</CardDescription>
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-72 w-full max-w-sm rounded-md border">
							<div className="p-4 text-sm">
								<div className="flex items-center gap-2 mb-2">
									<TwitchIcon className="h-5 w-5 text-purple-500" />
									<p className="font-medium">New Follower</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										2 minutes ago
									</p>
								</div>
								<p className="mb-4">@username has followed the channel</p>
								<div className="flex items-center gap-2 mb-2">
									<TwitchIcon className="h-5 w-5 text-purple-500" />
									<p className="font-medium">Subscription Renewed</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										10 minutes ago
									</p>
								</div>
								<p className="mb-4">@username has renewed their subscription</p>
								<div className="flex items-center gap-2 mb-2">
									<TwitchIcon className="h-5 w-5 text-purple-500" />
									<p className="font-medium">Raid Received</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										15 minutes ago
									</p>
								</div>
								<p className="mb-4">
									Received a raid from @username with 50 viewers
								</p>
							</div>
						</ScrollArea>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Analytics</CardTitle>
						<CardDescription>
							View real-time analytics for your channel
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div className="flex items-center gap-2">
								<BarChartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
								<div>
									<p className="font-medium">Viewer Count</p>
									<p className="text-4xl font-bold">1,234</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
								<div>
									<p className="font-medium">Active Chatters</p>
									<p className="text-4xl font-bold">567</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<TwitchIcon className="h-5 w-5 text-purple-500" />
								<div>
									<p className="font-medium">New Followers</p>
									<p className="text-4xl font-bold">42</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="12" x2="12" y1="20" y2="10" />
			<line x1="18" x2="18" y1="20" y2="4" />
			<line x1="6" x2="6" y1="20" y2="16" />
		</svg>
	);
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M10 9H8" />
			<path d="M16 13H8" />
			<path d="M16 17H8" />
		</svg>
	);
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

export function TwitchIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
		</svg>
	);
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}
