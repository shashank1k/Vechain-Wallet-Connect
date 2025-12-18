import { useEffect, useState } from "react";
import { useWallet, useThor } from "@vechain/dapp-kit-react";

const PRIMARY = "rgb(113, 102, 255)";

export default function Balance() {
  const { account } = useWallet();
  const thor = useThor();

  const [vet, setVet] = useState("0.0000");
  const [vtho, setVtho] = useState("0.0000");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!account) return;

    const fetchBalance = async () => {
      try {
        setLoading(true);
        const acc = await thor.accounts.getAccount(account);

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
    <div style={styles.wallet}>
      <h3 style={styles.title}>My Wallet</h3>

      <div style={styles.grid}>
        <Tile label="VET" value={vet} icon="💰" />
        <Tile label="VTHO" value={vtho} icon="⚡" />
      </div>

      {loading && <p style={styles.loading}>Updating balances...</p>}
    </div>
  );
}

/* 🔲 Balance Tile */
function Tile({ label, value, icon }) {
  return (
    <div style={styles.tile}>
      <div style={styles.icon}>{icon}</div>
      <div style={styles.token}>{label}</div>
      <div style={styles.amount}>{value}</div>
    </div>
  );
}

/* 🎨 Styles */
const styles = {
  wallet: {
    maxWidth: 360,
    margin: "20px auto",
    padding: 16,
    background: "#fff",
    borderRadius: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    fontFamily: "system-ui, sans-serif",
  },

  title: {
    marginBottom: 16,
    color: PRIMARY,
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
  },

  tile: {
    background: PRIMARY,
    color: "#fff",
    borderRadius: 16,
    aspectRatio: "1 / 1", // 👈 perfect square
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 6px 15px rgba(113,102,255,0.4)",
  },

  icon: {
    fontSize: 28,
    marginBottom: 6,
  },

  token: {
    fontSize: 14,
    opacity: 0.9,
  },

  amount: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },

  loading: {
    marginTop: 12,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
};
