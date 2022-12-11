import { MicrophoneIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { FunctionComponent, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useMessages } from "../hooks/use-messages";
import { Language } from "../types/language";
import { Message } from "../types/message";
import { User } from "../types/user";
import { allLanguages } from "./language/languages";
import { SpeechSelect } from "./speech-select";
import { Translated } from "./translated";
import "./chat.scss"
import ScrollToBottom from "react-scroll-to-bottom";
import { useTranslate } from "../hooks/use-translate";
export interface ChatProps {
    user: User
    messages: Message[]
    disabled: boolean
    setSpeaking: (speaking: boolean) => void
}
export const Chat: FunctionComponent<ChatProps> = ({ user, messages, disabled, setSpeaking }) => {
    const userLanguage = allLanguages.find((language) => language.code.toString() === user.language)
    if (!userLanguage) throw new Error('No language found for user')

    const { translatedText: speakMessagePlacholder } = useTranslate('Speak your message. Just hold the microphone button.', 'en', userLanguage.code.split("-")[0])

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(userLanguage)
    const { addMessage } = useMessages()
    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


    const startEvent = () => {
        resetTranscript()
        setSpeaking(true)
        SpeechRecognition.startListening({ continuous: true, language: selectedLanguage.code })
    }

    const stopEvent = () => {
        setSpeaking(false)
        SpeechRecognition.stopListening()
        if (transcript.length < 2) return
        addMessage({ text: transcript, from: user.id, id: Math.random().toString(), language: selectedLanguage.code })
    }

    return <div className="w-full h-full flex flex-col">
        <SpeechSelect selected={selectedLanguage} selectLanguage={setSelectedLanguage} all={allLanguages} />
        <ScrollToBottom className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((message, index) => {
                const isUser = message.from === user.id
                const readMessage = index + 1 === messages.length && !isUser

                return (
                    <div className={classNames("flex w-full mt-2 space-x-3 max-w-xs", { "justify-end ml-auto": isUser })}>
                        <div className={classNames("p-3 ", isUser ? "bg-blue-600 text-white rounded-l-lg rounded-br-lg " : "bg-gray-300 rounded-r-lg rounded-bl-lg")}>
                            <Translated from={message.language} to={selectedLanguage.code} text={message.text} read={readMessage} />
                        </div>
                    </div>
                )
            })}
        </ScrollToBottom>


        <div className="bg-gray-300 p-2 flex justify-center items-center gap-2">
            <input disabled className="flex items-center h-10 w-full rounded px-2 text-sm bg-white" type="text" placeholder={speakMessagePlacholder} value={disabled ? "" : transcript} />
            <button className="self-center p-4 rounded-full bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed" disabled={disabled}
                onMouseDown={startEvent}
                onMouseUp={stopEvent}
                onTouchStart={startEvent}
                onTouchEnd={stopEvent}>
                <MicrophoneIcon className="h-8 w-8 " />
            </button>
        </div>
    </div >
}