import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
require("dotenv").config();

const domain = "dev-3ql53222.us.auth0.com";
const clientId = "hHY1OOGB8AH9H6tKlDn97614B9gIDtqv";

console.log("WLO", window.location.origin);
console.log(clientId);

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);

reportWebVitals();
