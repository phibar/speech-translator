import { FunctionComponent, useState } from "react";
import { useMessages } from "../../hooks/use-messages";
import { Chat } from "../chat";

export const OppositeView: FunctionComponent = () => {
    const { state: { user1, user2, messages } } = useMessages()
    const [user1Speaking, setUser1Speaking] = useState<boolean>(false)
    const [user2Speaking, setUser2Speaking] = useState<boolean>(false)

    return (
        <div className="w-full h-full flex flex-col">
            <div className="h-1/2 bg-gray-50 rotate-180">
                <Chat user={user2} messages={messages} disabled={user1Speaking} setSpeaking={setUser2Speaking} />
            </div>
            <div className="h-1/2  bg-blue-50">
                <Chat user={user1} messages={messages} disabled={user2Speaking} setSpeaking={setUser1Speaking} />
            </div>
        </div>
    );
}