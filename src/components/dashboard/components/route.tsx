import Link from "next/link";

interface Props {
	name: string;
	href: string;
	icon: JSX.Element;
}

const className =
	"flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 w-full";

export const Route = ({ icon, name, href }: Props) => {
	return (
		<Link className={className} href={href}>
			{icon}
			{name}
		</Link>
	);
};

type RouteButton = Omit<Props, "href"> & { onClick?: () => void };

export const RouteButton = ({ icon, name, onClick }: RouteButton) => (
	<button onClick={onClick} type="button" className={className}>
		{icon}
		{name}
	</button>
);
