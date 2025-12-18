import React from "react";
import { WalletButton, useWallet } from "@vechain/dapp-kit-react";
import Balance from "./Balance";

const PRIMARY = "rgb(113, 102, 255)";

function App() {
  const { account } = useWallet();
  const styles = {
    phone: {
      width: 360,
      height: 720,
      background: "#fff",
      borderRadius: 30,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },

    header: {
      height: 60,
      background: PRIMARY,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    headerText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 600,
    },

    content: {
      flex: 1,
      padding: 16,
      overflowY: "auto",
    },

    center: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    addressBox: {
      background: "#f2f3ff",
      color: PRIMARY,
      padding: "10px 12px",
      borderRadius: 12,
      fontSize: 14,
      textAlign: "center",
      marginBottom: 12,
    },

    footer: {
      height: 50,
      background: "#f5f5f7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "1px solid #ddd",
    },

    footerText: {
      fontSize: 12,
      color: "#666",
    },
  };

  return (
    <div style={styles.phone}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.headerText}>VeChain Wallet</h2>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {account && <WalletButton />}
        {!account && (
          <WalletButton
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          />
        )}
        {!account && <div style={styles.center}></div>}

        {account && (
          <>
            {/* <div style={styles.addressBox}>
              {account.slice(0, 6)}...{account.slice(-4)}
            </div> */}

            <Balance />
          </>
        )}
      </div>

      {/* Bottom Bar */}
      <div style={styles.footer}>
        <span style={styles.footerText}>
          {account ? "Wallet Connected" : "Not Connected"}
        </span>
      </div>
    </div>
  );
}

export default App;
