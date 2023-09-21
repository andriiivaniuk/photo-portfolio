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
import {setUserLanguage} from "../../ducks/appInfo/appInfoActions.ts";
import {IMainStore} from "../../store.ts";

export const LangDropDown = () => {

    const currentLang = useSelector((state: IMainStore) => state.appInfo.userLanguage);
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    const dispatch = useDispatch();

    return (
        <LangDropDownStyled onClick={() => {
            setIsOptionsShown(!isOptionsShown)
        }} onBlur = {() => setIsOptionsShown(false)}>
            <LangMenu>
                <SelectedLang>
                    {currentLang}
                </SelectedLang>
                {isOptionsShown &&
                    <OptionsList>
                        {LANGUAGES.map((option) =>
                            <LanguageOption
                                key={option + "lang"}
                                onClick={() => dispatch(setUserLanguage(option))}>
                                {option}
                            </LanguageOption>
                        )}
                    </OptionsList>}
            </LangMenu>
        </LangDropDownStyled>
    );
}

export default LangDropDown;