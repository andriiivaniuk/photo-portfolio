import {IAction} from "./appInfoActions.ts";

export const appInfoReducer = (state = {}, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
}