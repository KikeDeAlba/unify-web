"use client";

import { addCommandFromForm } from "@/actions/bot";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const CreateButton = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setIsPopupOpen(true)}>
				Crear
			</button>

			<AnimatePresence>
				{isPopupOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						transition={{ duration: 0.5 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
						onClick={() => setIsPopupOpen(false)}
					>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<form
							action={addCommandFromForm}
							onClick={(e) => e.stopPropagation()}
							className="w-full max-w-xl p-6 bg-slate-800 shadow-lg rounded-lg"
						>
							<div>
								<span className="font-medium text-purple-500">function</span>{" "}
								<input
									name="command"
									type="text"
									className="w-40 bg-transparent border-b outline-none"
								/>
								<span className="font-medium text-purple-500">( </span>
								<span className="font-medium">channel</span>, tags, args, ai
								<span className="font-medium text-purple-500"> )</span>
								{" {"}
							</div>
							<textarea
								name="code"
								className="w-full bg-transparent outline-none pl-11 min-h-32 transition-colors hover:bg-slate-900 mb-0"
							/>
							{"}"}

							<footer className="flex items-center justify-end gap-4 mt-4">
								<button
									type="submit"
									className="px-4 bg-purple-500 text-white hover:bg-purple-600 rounded-md transition-colors"
								>
									Crear
								</button>
							</footer>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
