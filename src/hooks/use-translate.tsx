import { useState, useEffect } from 'react';
import translate from 'google-translate-api';
export function useTranslate(text: string, from: string, to: string) {
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function translateStuff() {

            setLoading(true);
            if (from === to) {
                setTranslatedText(text);
                setLoading(false);
                return;
            }

            try {
                const res = await fetch("https://translate.phibar.one/translate", {
                    method: "POST",
                    body: JSON.stringify({
                        q: text,
                        source: from,
                        target: to,
                        format: "text",
                        api_key: ""
                    }),
                    headers: { "Content-Type": "application/json" }
                });

                setTranslatedText((await res.json()).translatedText);

            } catch (err: any) {
                setError(err.message);
            }
            setLoading(false);
        }

        translateStuff();
    }, [text, from, to]);

    return { loading, error, translatedText };
}
