import { BotIcon } from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export type PAside = {
	routes: Array<{
		name: string;
		href?: string;
		subRoutes?: PAside["routes"];
		Icon: () => JSX.Element;
	}>;
};

export const Aside = ({ routes }: PAside) => {
	return (
		<aside className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
			<div className="flex h-[60px] items-center px-6">
				<Link className="flex items-center gap-2 font-semibold" href="#">
					<BotIcon />
					<span className="uppercase">Unify</span>
				</Link>
			</div>
			<div className="flex-1">
				<nav className="grid items-start px-4 text-sm font-medium">
					{routes.map((route) => {
						if (route.subRoutes) {
							return <SubRoute key={`routes-${route.name}`} route={route} />;
						}

						if (route.href == null) return;

						return (
							<Link
								key={`routes-${route.name}`}
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
								href={route.href}
							>
								{route.Icon()}
								{route.name}
							</Link>
						);
					})}
				</nav>
			</div>
		</aside>
	);
};

const SubRoute = ({ route }: { route: PAside["routes"][0] }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="w-full" asChild>
				<button
					type="button"
					className="flex w-full text-sm items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
				>
					{route.Icon()}
					{route.name}
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				{route.subRoutes?.map((subRoute) => {
					if (subRoute.subRoutes)
						return (
							<SubRoute key={`routes-${subRoute.name}`} route={subRoute} />
						);

					if (subRoute.href == null) return;
					return (
						<DropdownMenuItem key={`routes-${subRoute.name}`}>
							<Link
								className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
								href={subRoute.href}
							>
								{subRoute.Icon()}
								{subRoute.name}
							</Link>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
