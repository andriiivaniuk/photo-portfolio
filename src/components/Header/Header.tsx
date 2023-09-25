import {HeaderBurgerBtn, HeaderList, HeaderListItem, HeaderMobileOverlay, HeaderStyled} from "./HeaderStyled.ts";
import {Link} from "react-router-dom";
import LangDropDown from "../LangDropDown/LangDropDown.tsx";
import {HeaderTexts} from "./HeaderTexts.ts";
import {useDispatch, useSelector} from "react-redux";
import {IMainStore} from "../../store.ts";

import burger from "../../assets/img/hamburger.svg"
import {toggleMobileOverlayMenu} from "../../ducks/appInfo";


export const Header = () => {
    const dispatch = useDispatch();
    const mobileMenuShown = useSelector((state: IMainStore) => state.appInfo.mobileOverlayMenuShown);

    return (
        <HeaderStyled>
            <HeaderListElem/>
            <HeaderBurgerBtn onClick = {() => {dispatch(toggleMobileOverlayMenu())}}>
                <img src = {burger} alt = "hamburger menu"/>
            </HeaderBurgerBtn>
            {mobileMenuShown &&
                <HeaderMobileOverlay>
                    burger overlay
                </HeaderMobileOverlay>}
        </HeaderStyled>
    )
}

export default Header;

const HeaderListElem = () => {
    const lang = useSelector((store: IMainStore) => store.appInfo.userLanguage);

    return (
        <HeaderList>
            <HeaderListItem>
                <Link to={"about"}>
                    {HeaderTexts.aboutMe[lang]}
                </Link>
            </HeaderListItem>
            <HeaderListItem>
                <Link to={"portfolio"}>
                    {HeaderTexts.portfolio[lang]}
                </Link>
            </HeaderListItem>
            <HeaderListItem>
                <Link to={"contacts"}>
                    {HeaderTexts.contacts[lang]}
                </Link>
            </HeaderListItem>

            <LangDropDown />
        </HeaderList>
    )
}