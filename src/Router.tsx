import {Routes, Route} from "react-router";
import Main from "./pages/Main/Main.tsx";


const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
        </Routes>
    )
}

export default Router;