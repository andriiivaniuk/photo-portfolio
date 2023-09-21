import {IAction, SET_OVERLAY_CLOSED, SET_USER_LANGUAGE} from "./appInfoActions.ts";

export const appInfoReducer = (state = {}, action: IAction) => {
    switch (action.type) {
        case SET_OVERLAY_CLOSED:
            return {
                ...state,
                overlayClosed: true,
            }
        case SET_USER_LANGUAGE:{
            return {
                ...state,
                userLanguage: action.payload
            }
        }
        default:
            return state;
    }
}