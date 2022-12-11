import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { addMessageAction } from "../reducer/messages";
import { Dispatch, RootState } from "../store";
import { Message } from "../types/message";

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMessages = () => {
    const dispatch = useDispatch<Dispatch>()
    const addMessage = (message: Message) => dispatch(addMessageAction(message));
    const state = useAppSelector(state => state.messages);
    return { addMessage, state };
}