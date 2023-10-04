import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./Redux/store"
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import  Data  from "./pages/Context/DataContext";
import { AppContextProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
      <Provider store={store}>
        <Data>
          <BrowserRouter>
            <ChakraProvider>
              <AppContextProvider>
                <App />
              </AppContextProvider>
            </ChakraProvider>
          </BrowserRouter>
        </Data>
      </Provider>
  //  </React.StrictMode>
);


reportWebVitals();
