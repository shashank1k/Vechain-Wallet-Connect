import { useEffect, useState } from "react";
import { useWallet, useThor } from "@vechain/dapp-kit-react";

export default function Balance() {
  const { account } = useWallet();
  const thor = useThor();

  const [vet, setVet] = useState(null);
  const [vtho, setVtho] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!account) return;

    const fetchBalance = async () => {
      try {
        setLoading(true);

        const acc = await thor.accounts.getAccount(account);

        // Convert from wei → VET / VTHO
        setVet((Number(acc.balance) / 1e18).toFixed(4));
        setVtho((Number(acc.energy) / 1e18).toFixed(4));
      } catch (err) {
        console.error("Failed to fetch balance", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [account, thor]);

  if (!account) return null;

  return (
    <div style={{ marginTop: 16 }}>
      <h3>Balances</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>💰 VET: {vet}</p>
          <p>⚡ VTHO: {vtho}</p>
        </>
      )}
    </div>
  );
}
