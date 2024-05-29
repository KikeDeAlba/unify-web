import type { PAside } from "../aside";
import { Route } from "../components/route";
import { SubRoute } from "../components/sub-route";

interface Props {
	route: PAside["routes"][0];
}

export const ReadRoute = ({ route }: Props) => {
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
};
