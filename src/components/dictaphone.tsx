import React, { FunctionComponent } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export interface DictaphoneProps {
    languageCode: string
}
export const Dictaphone: FunctionComponent<DictaphoneProps> = ({ languageCode }) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    SpeechRecognition.startListening({ continuous: true, language: '' });

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={() => SpeechRecognition.startListening({ language: languageCode })}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};
export default Dictaphone;