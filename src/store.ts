import {legacy_createStore} from "redux";
import reducers from "./ducks";
import {composeWithDevTools} from "@redux-devtools/extension";
import {getUserLanguage} from "./utils/utils.ts";

export interface appInfo {
    userLanguage: string,
}

export interface IMainStore {
    appInfo: appInfo,
}

const getInitialStore = (): IMainStore => {
    return {
        appInfo: {
            userLanguage: checkStorageForLang()
        }
    }
}

export const mainStore = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools()
)

function checkStorageForLang() {
    if (localStorage.getItem("lang") !== null) {
        return localStorage.getItem("lang") as string;
    } else {
        return getUserLanguage();
    }
}

export default mainStore;