import {useDispatch} from "react-redux";
import {MainStyled} from "./MainStyled.ts";

export const Main = () => {
    const dispatch = useDispatch();

    return (
        <MainStyled>
            Main Page
        </MainStyled>
    )
}

export default Main;