import {WelcomePhrase, WelcomeStyled} from "./WelcomeStyled.ts";
import {useSelector} from "react-redux";
import {IMainStore} from "../../store.ts";
import {WelcomeOverlayTexts} from "./WelcomeOverlayTexts.ts";

export const WelcomeOverlay = () => {

    const lang = useSelector((state: IMainStore ) => state.appInfo.userLanguage);

    return (
        <WelcomeStyled>
            <WelcomePhrase>
                { WelcomeOverlayTexts.welcome[lang]}
            </WelcomePhrase>
        </WelcomeStyled>
    )
}

export default WelcomeOverlay;