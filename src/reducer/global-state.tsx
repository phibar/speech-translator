// import { Action } from "../types/action";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// type Actions =
//     | Action<"INCREMENT">
//     | Action<"DECREMENT">
//     | Action<"SET_VALUE", number>

// export type GlobalState = {
//     count: number;
// }

// export const initialState: GlobalState = { count: 1 }

// export const reducer = (state: GlobalState = initialState, action: Actions) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return { ...state, count: state.count + 1 };
//         case "DECREMENT":
//             return { ...state, count: state.count - 1 };
//         case "SET_VALUE":
//             return { ...state, count: action.payload };
//     }
// }





export interface CounterState {
    value: number;
    otherValue: number;
}

const initialState: CounterState = {
    value: 0,
    otherValue: 1
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, setValue } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;

export const counterState = (state: RootState) => state.counter;