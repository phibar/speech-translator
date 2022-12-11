import classNames from "classnames"
import { ElementType, FunctionComponent, PropsWithChildren, useEffect, useMemo } from "react"
import { useTranslate } from "../hooks/use-translate"



export interface TranslatedProps {
    from: string
    to: string
    text: string
    as?: ElementType
    className?: string
    read?: boolean
}

function convertLanguageCode(code: string) {
    if (code.includes("-")) {
        return code.split("-")[0]
    }
    return code
}

export const Translated: FunctionComponent<TranslatedProps> = ({ to, from, text, as: Tag = "p", className, read }) => {

    const { translatedText, error, loading } = useTranslate(text, convertLanguageCode(from), convertLanguageCode(to))

    const utterThis = useMemo(() => {
        const utter = new SpeechSynthesisUtterance(translatedText)
        return utter;
    }, [translatedText]);

    useEffect(() => {
        if (!read) return;
        utterThis.lang = to;
        window.speechSynthesis.speak(utterThis);
    }, [utterThis, read, to])

    return <Tag className={className}>
        {loading && <span>Loading...</span>}
        {translatedText}
        {error && <span className="text-red-500">{error}</span>}
    </Tag>
}
