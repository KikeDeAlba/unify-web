import Link from "next/link";
import { CreateButton } from "./components/create-button";

export default function CommandsPage() {
	return (
		<main className="flex-1  py-14 px-20 ">
			<h1 className="text-2xl font-bold">Commands</h1>

			<CreateButton />
		</main>
	);
}
