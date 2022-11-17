import { builderTypes } from "../types/builderTypes"

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case builderTypes.CONFIM_BUILD:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }


}