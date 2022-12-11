import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./reducer/global-state";
import { messagesReducer } from "./reducer/messages";

export const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        messages: messagesReducer,
    },
    devTools: true,
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
