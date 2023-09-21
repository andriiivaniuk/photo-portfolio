import {HeaderList, HeaderListItem, HeaderStyled} from "./HeaderStyled.ts";
import {Link} from "react-router-dom";
import LangDropDown from "../LangDropDown/LangDropDown.tsx";
import {HeaderTexts} from "./HeaderTexts.ts";
import {useSelector} from "react-redux";
import {IMainStore} from "../../store.ts";


export const Header = () => {
    const lang = useSelector((store: IMainStore) => store.appInfo.userLanguage);

    return (
        <HeaderStyled>
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
        </HeaderStyled>
    )
}

export default Header;