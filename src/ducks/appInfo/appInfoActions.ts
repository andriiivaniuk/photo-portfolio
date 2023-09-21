export interface IAction {
    type: string,
    payload?: any
}

export const SET_OVERLAY_CLOSED: string = "SET_OVERLAY_CLOSED";
export const SET_USER_LANGUAGE = "SET_USER_LANGUAGE";

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