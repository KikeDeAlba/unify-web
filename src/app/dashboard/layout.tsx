import { Aside } from "@/components/dashboard/aside";
import { AsideRoutes } from "@/components/dashboard/aside-routes";
import { DropDownHeader } from "@/components/dropdown-header";

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="grid min-h-screen w-full grid-cols-[280px_1fr] overflow-hidden">
			<Aside routes={AsideRoutes} />
			<div className="flex flex-col h-screen overflow-y-auto">
				<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
					<div className="flex-1">
						<h1 className="font-semibold text-lg uppercase">Unify dashboard</h1>
					</div>
					<DropDownHeader />
				</header>
				{children}
			</div>
		</div>
	);
}
