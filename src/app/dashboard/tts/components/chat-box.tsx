"use client";

import { ChatBox } from "@/components/chat-box";
import { useChat } from "../hooks/use-chat";
import { useEffect } from "react";

export const ChatBoxTwitch = () => {
	const { chat, lastMessage } = useChat();

	useEffect(() => {
		if (!lastMessage) return;

		const voices = window.speechSynthesis.getVoices();

		const voice = voices.find((voice) => voice.lang === "es-MX");

		if (!voice) return;

		const utterThis = new window.SpeechSynthesisUtterance(lastMessage.message);

		utterThis.voice = voice;
		utterThis.lang = "es-MX";

		window.speechSynthesis.speak(utterThis);
	}, [lastMessage]);

	return <ChatBox messages={chat} />;
};
