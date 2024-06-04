"use client";

import { addCommand, joinChannel } from "@/actions/bot";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-one_dark";

export const CreateButton = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [code, setCode] = useState(
		"\nexport const description = 'your command description'\n\nexport function CommandName (\n\tchannel,\n\ttags,\n\targs,\n\tai\n) {\n\n}",
	);

	return (
		<>
			<button type="button" onClick={() => setIsPopupOpen(true)}>
				Crear
			</button>

			<button
				type="button"
				className="mt-4 px-4 bg-purple-500 text-white hover:bg-purple-600 rounded-md transition-colors"
				onClick={() => {
					joinChannel();
				}}
			>
				join channel
			</button>

			<AnimatePresence>
				{isPopupOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
						onClick={() => {
							setIsPopupOpen(false);
							setCode(
								"\nexport const description = 'your command description'\n\nexport function CommandName (\n\tchannel,\n\ttags,\n\targs,\n\tai\n) {\n\n}",
							);
						}}
					>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<form
							onSubmit={(e) => {
								e.preventDefault();

								// regex to get the function name
								const command = code.match(/function ([^(]+)/)?.[1];

								if (!command) {
									alert("No function name found");
									return;
								}

								// regex to get code inside the function
								const codeInsideFunction = code.match(
									/function\s+[^(]+\([^)]*\)\s*{([\s\S]*)}/,
								)?.[1];

								if (!codeInsideFunction) {
									alert("No code found inside the function");
									return;
								}

								const description = code.match(
									/export const description = '([^']+)'/,
								)?.[1];

								if (!description) {
									alert("No description found");
									return;
								}

								if (codeInsideFunction.includes("//")) {
									alert("Code inside the function cannot contain comments");
									return;
								}

								if (command.toLowerCase().includes("commandname")) {
									alert("Command name cannot be CommandName");
									return;
								}

								if (!codeInsideFunction.includes("return")) {
									alert(
										"Code inside the function must contain a return statement",
									);
									return;
								}

								addCommand(
									command.replace(" ", "").toLowerCase(),
									description,
									codeInsideFunction,
								);
							}}
							onClick={(e) => e.stopPropagation()}
							className="w-full max-w-7xl p-6 bg-slate-800 shadow-lg rounded-lg"
						>
							<div className="flex gap-3">
								<AceEditor
									mode="typescript"
									theme="one_dark"
									value={code}
									onChange={(newCode) => setCode(newCode)}
									name="code-editor"
									editorProps={{ $blockScrolling: true }}
									width="100%"
									setOptions={{
										showLineNumbers: true,
										tabSize: 2,
										fontSize: 16,
										enableSnippets: true,
										enableBasicAutocompletion: true,
										enableLiveAutocompletion: true,
										enableEmmet: true,
									}}
								/>

								<div className="w-[35%]">
									<h2 className="text-lg font-bold">Definitions:</h2>

									<ul>
										<li>
											<span className="font-medium">channel</span>: string
										</li>
										<li>
											<details>
												<summary className="cursor-pointer">
													<span className="font-medium">tags</span>: object
												</summary>
												<pre>username: string</pre>
												<pre>bits: string</pre>
												<pre>color: string</pre>
												<pre>display_name: string</pre>
												<pre>id: string</pre>
												<pre>mod: boolean</pre>
												<pre>subscriber: boolean</pre>
												<pre>turbo: boolean</pre>
											</details>
										</li>

										<li>
											<span className="font-medium">args</span>: string[]
										</li>

										<li>
											<details>
												<summary className="cursor-pointer">
													<span className="font-medium">ai</span>: function
												</summary>
												<pre>
													props:{" "}
													{
														'{\n\trole: "user" | "system" | "assistant",\n\tcontent: string\n}[]'
													}
												</pre>
												<pre>return: string</pre>
											</details>
										</li>
									</ul>
								</div>
							</div>

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
