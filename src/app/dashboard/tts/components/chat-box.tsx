"use client";

import { useChat } from "../hooks/use-chat";

export const ChatBox = () => {
	const chat = useChat();

	console.log(chat);

	return (
		<section>
			{chat.map((message) => (
				<div key={message.author}>
					<p>
						{message.author}: {message.message}
					</p>
				</div>
			))}
		</section>
	);
};
