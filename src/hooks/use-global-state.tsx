import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CounterState } from "../reducer/global-state";
import { Dispatch, RootState } from "../store";
// import { GlobalState } from "../reducer/global-state";

// export const useCounter = () => {
//     const dispatch = useDispatch();
//     const state = useSelector((state: CounterState) => state);
//     debugger

//     return { state, dispatch };
// }

// export const useAppSelector: TypedUseSelectorHook<CounterState> = useSelector;

// export const selectCount = (state: GlobalState) => state?.count;

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;