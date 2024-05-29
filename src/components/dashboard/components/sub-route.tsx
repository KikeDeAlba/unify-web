"use client";

import { useState } from "react";
import type { PAside } from "../aside";
import { RouteButton } from "./route";
import { AnimatePresence, motion } from "framer-motion";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { ReadRoute } from "../utils/read-route";

export const SubRoute = ({ route }: { route: PAside["routes"][0] }) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="flex w-full justify-between items-center">
				<RouteButton
					onClick={() => setOpen((prev) => !prev)}
					icon={route.icon}
					name={route.name}
				/>

				<IconCaretLeftFilled
					className={`${open ? "-rotate-90" : ""} transition-all`}
				/>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						className="overflow-hidden border-b border-gray-200 dark:border-gray-500 pl-2"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						{route.subRoutes?.map((subRoute) => (
							<ReadRoute key={`read-route-${subRoute.name}`} route={subRoute} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
