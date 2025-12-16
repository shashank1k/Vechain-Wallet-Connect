import { useWallet } from "@vechain/dapp-kit-react";

export default function ConnectWallet() {
  const { connect, disconnect, account, isConnected } = useWallet();

  return (
    <div>
      {!isConnected ? (
        <button onClick={connect}>Connect VeWorld Wallet</button>
      ) : (
        <>
          <p>Connected: {account}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      )}
    </div>
  );
}
