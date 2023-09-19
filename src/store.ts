import {legacy_createStore} from "redux";
import reducers from "./ducks";
import {composeWithDevTools} from "@redux-devtools/extension";

const getInitialStore = () => {
    return {
        appInfo: {
            userLanguage: null
        }
    }
}

export const mainStore = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools()
)

export default mainStore;