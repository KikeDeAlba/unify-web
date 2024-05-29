"use client";

import { ChatBox } from "@/components/chat-box";
import { useChat } from "../hooks/use-chat";
import { sendMessage } from "@/actions/twitch";
import { useTextToSpeech } from "../hooks/use-tts";

export const ChatBoxTwitch = () => {
	const { chat, lastMessage } = useChat();
	useTextToSpeech(lastMessage?.message);

	return (
		<ChatBox
			messages={chat}
			onSubmit={(message) => {
				sendMessage(message).catch((err) => {
					console.log(err);
				});
			}}
		/>
	);
};
