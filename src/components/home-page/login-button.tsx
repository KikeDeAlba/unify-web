import { getTwitchAuthUrl } from "@/actions/twitch";
import Link from "next/link";

export const LoginButton = async () => {
	const twitchAuthUrl = await getTwitchAuthUrl();

	return (
		<>
			<Link
				className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-900/90 dark:text-black dark:bg-gray-50 dark:hover:bg-gray-50/90"
				href={twitchAuthUrl}
			>
				Login
			</Link>
		</>
	);
};
