import { builderTypes } from "../types/builderTypes";

export const builderConfirmBuild = (build) => {
    return {
        type: builderTypes.CONFIM_BUILD,
        payload: { ...build },
    };
}