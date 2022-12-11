// import { Action } from "../types/action";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Message } from "../types/message";
import { User } from "../types/user";
export type MessagesState = {
    user1: User
    user2: User
    messages: Message[]
}

const initialState: MessagesState = {
    user1: {
        id: '1',
        language: 'de-DE'
    },
    user2: {
        id: '2',
        language: 'uk-UA'
    },
    messages: []
};

const messagesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addMessageAction: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
    },
});

export const { addMessageAction } = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;

export const counterState = (state: RootState) => state.messages;