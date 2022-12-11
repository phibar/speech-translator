import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Message } from '../types/message';

export const MessagesContext = React.createContext<Message[]>([]);
MessagesContext.displayName = 'MessagesContext';

export const MessagesProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [messages, setMessages] = React.useState<Message[]>([]);

    return (
        <MessagesContext.Provider value={messages}>
            {children}
        </MessagesContext.Provider>
    );
}