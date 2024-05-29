'use client'
import { listenChat } from "@/client/twitch";
import { useEffect, useState } from "react";

export const useChat = () => {
    const [chatMessages, setChatMessages] = useState<
        Array<{
            author: string;
            message: string;
        }>
    >([]);

    useEffect(() => {
        listenChat(({ message, tags }) => {
            setChatMessages((prev) => {
                if (prev[prev.length - 1]?.message === message && prev[prev.length - 1]?.author === tags["display-name"]) return prev

                return [...prev, {
                    author: tags["display-name"] ?? '',
                    message
                }]
            })
        })
    }, []);

    return {
        chat: chatMessages,
        lastMessage: chatMessages[chatMessages.length - 1]
    }
}