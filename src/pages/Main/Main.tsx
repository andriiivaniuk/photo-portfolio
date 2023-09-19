import {useDispatch} from "react-redux";
import {MainStyled} from "./MainStyled.ts";
import WelcomeOverlay from "../../components/WelcomeOverlay/WelcomeOverlay.tsx";

export const Main = () => {
    const dispatch = useDispatch();

    return (
        <MainStyled>
            Main Page
            <WelcomeOverlay />
        </MainStyled>
    )
}

export default Main;