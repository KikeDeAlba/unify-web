import { getTwitchUserInfo } from "@/actions/twitch";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const DropDownHeader = async () => {
	const user = await getTwitchUserInfo();

	return (
		<div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="rounded-full" size="icon" variant="ghost">
						<img
							alt="Avatar"
							className="rounded-full"
							height="32"
							src={user.profile_image_url}
							style={{
								aspectRatio: "32/32",
								objectFit: "cover",
							}}
							width="32"
						/>
						<span className="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>{user.display_name}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
