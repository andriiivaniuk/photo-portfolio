export interface IAction {
    type: string,
    payload?: any
}

export const SET_OVERLAY_CLOSED: string = "SET_OVERLAY_CLOSED";
export const SET_USER_LANGUAGE = "SET_USER_LANGUAGE";
export const TOGGLE_MOBILE_OVERLAY_MENU = "TOGGLE_MOBILE_OVERLAY_MENU";

export const setOverlayClosed  = (): IAction => {
    return {
        type: SET_OVERLAY_CLOSED,
    }
}

export const setUserLanguage = (lang: string): IAction => {
    return {
        type: SET_USER_LANGUAGE,
        payload: lang
    }
}

export const toggleMobileOverlayMenu = (): IAction => {
    return {
        type: TOGGLE_MOBILE_OVERLAY_MENU
    }
}