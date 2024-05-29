"use client";

import { ChatBox } from "@/components/chat-box";
import { useChat } from "../hooks/use-chat";
import { useEffect } from "react";
import { sendMessage } from "@/actions/twitch";

export const ChatBoxTwitch = () => {
	const { chat, lastMessage } = useChat();

	useEffect(() => {
		if (!lastMessage) return;
		const utterThis = new window.SpeechSynthesisUtterance(lastMessage.message);
		window.speechSynthesis.speak(utterThis);
	}, [lastMessage]);

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
