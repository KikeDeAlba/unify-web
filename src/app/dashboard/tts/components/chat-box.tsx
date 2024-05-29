"use client";

import { ChatBox } from "@/components/chat-box";
import { useChat } from "../hooks/use-chat";
import { useEffect } from "react";

export const ChatBoxTwitch = () => {
	const { chat, lastMessage } = useChat();

	useEffect(() => {
		if (!lastMessage) return;
		const utterThis = new window.SpeechSynthesisUtterance(lastMessage.message);
		window.speechSynthesis.speak(utterThis);
	}, [lastMessage]);

	return <ChatBox messages={chat} />;
};
