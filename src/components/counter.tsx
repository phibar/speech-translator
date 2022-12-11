import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/use-global-state";
import { counterState, decrement, increment, setValue } from "../reducer/global-state";

export const Counter: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(counterState)
    return (
        <>
            <div>CURRENT: {state.value}</div>
            <br />
            <div>CURRENT: {state.otherValue}</div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button onClick={() => dispatch(setValue(10))}>
                Set to 10
            </button>
        </>
    );
}


