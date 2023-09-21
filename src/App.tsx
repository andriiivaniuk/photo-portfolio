
// @ts-ignore
import GlobalStyle from "./assets/reset.js"
import Router from "./Router.tsx";
import WelcomeOverlay from "./components/WelcomeOverlay/WelcomeOverlay.tsx";
import Header from "./components/Header/Header.tsx";
import './App.css';

function App() {

  return (
      <div className="App">
          <GlobalStyle/>

          <WelcomeOverlay />
          <Header />
          <Router />
      </div>
  )
}

export default App
