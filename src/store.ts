import {applyMiddleware, legacy_createStore} from "redux";
import reducers from "./ducks";
import {composeWithDevTools} from "@redux-devtools/extension";
import {getUserLanguage} from "./utils/utils.ts";
import storageMiddleware from "./middlewares/storageMiddleware.ts";

export interface appInfo {
    userLanguage: string,
    overlayClosed: boolean,
    mobileOverlayMenuShown: boolean,
    isLangDropDownOpen: boolean,
}

export interface IMainStore {
    appInfo: appInfo,
}

const getInitialStore = (): IMainStore => {
    return {
        appInfo: {
            userLanguage: checkStorageForLang(),
            overlayClosed: false,
            mobileOverlayMenuShown: false,
            isLangDropDownOpen: false
        }
    }
}

export const mainStore = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(storageMiddleware as any))
)

function checkStorageForLang() {
    if (localStorage.getItem("lang") !== null) {
        return localStorage.getItem("lang") as string;
    } else {
        return getUserLanguage();
    }
}

export default mainStore;