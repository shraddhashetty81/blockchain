import React from "react";

//Utils
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

//Component
import App from "./App";

//Service Worker
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Router>
                <App />
        </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
