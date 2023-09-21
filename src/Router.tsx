import {Routes, Route} from "react-router";
import Main from "./pages/Main/Main.tsx";
import {About} from "./pages/About/About.tsx";


const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
            <Route path = "/about" element = {<About />}></Route>
        </Routes>
    )
}

export default Router;