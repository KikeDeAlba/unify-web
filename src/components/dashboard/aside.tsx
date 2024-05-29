import { BotIcon } from "lucide-react";
import Link from "next/link";
import { SubRoute } from "./components/sub-route";
import { Route } from "./components/route";

export type PAside = {
	routes: Array<{
		name: string;
		href?: string;
		subRoutes?: PAside["routes"];
		icon: JSX.Element;
	}>;
};

export const Aside = ({ routes }: PAside) => {
	return (
		<aside className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
			<div className="flex h-[60px] items-center px-6">
				<Link
					className="flex items-center gap-2 font-semibold"
					href="/dashboard"
				>
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
							<Route
								key={`routes-${route.name}`}
								icon={route.icon}
								name={route.name}
								href={route.href}
							/>
						);
					})}
				</nav>
			</div>
		</aside>
	);
};
