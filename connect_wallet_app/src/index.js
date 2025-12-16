import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { DAppKitProvider } from "@vechain/dapp-kit-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DAppKitProvider
      // MAINNET node
      node="https://mainnet.vechain.org/"
      usePersistence={true}
      logLevel="DEBUG"
    >
      <App />
    </DAppKitProvider>
  </React.StrictMode>
);
