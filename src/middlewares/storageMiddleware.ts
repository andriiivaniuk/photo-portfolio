import {IAction, SET_USER_LANGUAGE} from "../ducks/appInfo/appInfoActions.ts";
import {IMainStore} from "../store.ts";


export const storageMiddleware = (store: IMainStore) => (next: any) => (action: IAction) => {
    switch (action.type) {
        case SET_USER_LANGUAGE:
            localStorage.setItem("lang", action.payload);
            break;
    }

    next(action);
}

export default storageMiddleware;