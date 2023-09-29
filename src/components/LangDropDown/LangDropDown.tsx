import { useState } from "react";
import {
    useSelector,
    useDispatch
} from "react-redux"
import {
    LangDropDownStyled,
    LangMenu,
    OptionsList,
    LanguageOption, SelectedLang
} from "./LangDropDownStyled";
import { LANGUAGES } from "../../config/configs";
import {setLangDropDownState, setUserLanguage} from "../../ducks/appInfo";
import {IMainStore} from "../../store.ts";

export const LangDropDown = () => {

    const currentLang = useSelector((state: IMainStore) => state.appInfo.userLanguage);
    const isOptionsShown = useSelector((state: IMainStore) => state.appInfo.isLangDropDownOpen)
    const dispatch = useDispatch();

    return (
        <LangDropDownStyled>
            <LangMenu>
                <SelectedLang onClick={() => dispatch(setLangDropDownState(!isOptionsShown))}>
                    {currentLang}
                </SelectedLang>
                {isOptionsShown &&
                    <OptionsList>
                        {LANGUAGES.map((option) =>
                            <LanguageOption
                                key={option + "lang"}
                                onClick={
                                    () => {
                                        dispatch(setUserLanguage(option));
                                        dispatch(setLangDropDownState(false));
                                    }
                                }>
                                {option}
                            </LanguageOption>
                        )}
                    </OptionsList>}
            </LangMenu>
        </LangDropDownStyled>
    );
}

export default LangDropDown;