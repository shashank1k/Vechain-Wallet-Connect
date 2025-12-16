import React, { useEffect } from "react";
import { WalletButton, useWallet } from "@vechain/dapp-kit-react";
import Balance from "./Balance";
function App() {
  const { account, source } = useWallet();

  useEffect(() => {
    console.log("Connected account:", account);
    console.log("Wallet source:", source);
  }, [account, source]);

  return (
    <div style={{ backgroundColor: "darkgray", width: "80%", height: "100%" }}>
      <WalletButton />
      {/* {(account != null || account != undefined) && (
        <h1>Wallet Address : {account}</h1>
      )} */}

      {account && (
        <>
          <p>Connected: {account}</p>
          <Balance />
        </>
      )}
    </div>
  );
}

export default App;
