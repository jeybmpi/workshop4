import { receiptTypes } from "../types/receiptTypes";

const initialState = []

export const receiptReset = (initialState) => {
    return {
        type: receiptTypes.reset,
        payload: initialState,
    };
}