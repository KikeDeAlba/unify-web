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
            console.log('message', message);

            setChatMessages((prev) => [...prev, {
                author: tags["display-name"] ?? '',
                message
            }])
        })
    }, []);

    return chatMessages
}