
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import mainStore from "./store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
      <Provider store={mainStore}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
)
