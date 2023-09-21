import {ContactsStyled} from "./ContactsStyled.ts";
import {ContactsTexts} from "./ContactsTexts.ts";
import {useSelector} from "react-redux";
import {IMainStore} from "../../store.ts";

export const Contacts = () => {
    const lang = useSelector((store: IMainStore) => store.appInfo.userLanguage);

    return (
        <ContactsStyled>
            {ContactsTexts.contacts[lang]}
        </ContactsStyled>
    )
}

export default Contacts;