import {Routes, Route} from "react-router";
import Main from "./pages/Main/Main.tsx";
import {About} from "./pages/About/About.tsx";
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";


const Router = () => {
    return(
        <Routes>
            <Route path = "/" element = {<Main />}></Route>
            <Route path = "/about" element = {<About />}></Route>
            <Route path = "/portfolio" element = {<Portfolio />}></Route>
            <Route path = "/contacts" element = {<Contacts />}></Route>
        </Routes>
    )
}

export default Router;