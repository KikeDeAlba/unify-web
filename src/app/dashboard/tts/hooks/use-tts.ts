import { useEffect } from "react"

export const useTextToSpeech = (speech?: string) => {
    useEffect(() => {
        if (!speech) return;
        const utterThis = new window.SpeechSynthesisUtterance(speech);
        window.speechSynthesis.speak(utterThis);
    }, [speech])
}