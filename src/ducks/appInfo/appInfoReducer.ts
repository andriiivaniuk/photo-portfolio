import {IAction, SET_OVERLAY_CLOSED, SET_USER_LANGUAGE, TOGGLE_MOBILE_OVERLAY_MENU} from "./appInfoActions.ts";
import {appInfo} from "../../store.ts";

export const appInfoReducer = (state: appInfo = {} as appInfo, action: IAction) => {
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
        case TOGGLE_MOBILE_OVERLAY_MENU: {
            return {
                ...state,
                mobileOverlayMenuShown: !state.mobileOverlayMenuShown
            }
        }
        default:
            return state;
    }
}