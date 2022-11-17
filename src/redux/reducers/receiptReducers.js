import { receiptTypes } from "../types/receiptTypes"

const initialState = []

export const receiptReducer = (state = { initialState }, action) => {
    switch (action.type) {
        case receiptTypes.reset:
            return {
                ...action.payload
            }
        default:
            return state
    }


}