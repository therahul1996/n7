export default function PhoneMockup({ balance = "$42,295.00 USD", name = "Toni Kross" }: { balance?: string; name?: string }) {
  return (
    <div style={{
      width: 200,
      background: "#0a0a0a",
      borderRadius: 28,
      border: "6px solid #1a1a1a",
      padding: "16px 12px",
      fontFamily: "inherit",
      color: "#fff",
      flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>TK</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600 }}>{name}</div>
          <div style={{ fontSize: 9, color: "#aaa" }}>Personal Account</div>
        </div>
      </div>
      <div style={{ background: "#141414", borderRadius: 12, padding: "12px", marginBottom: 10 }}>
        <div style={{ fontSize: 9, color: "#888", marginBottom: 2 }}>Total Balance</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#00e5a0" }}>{balance}</div>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {["Fund Transfer", "Add Money", "More"].map(a => (
          <button key={a} style={{ flex: 1, background: "#1e1e1e", border: "none", borderRadius: 8, color: "#ccc", fontSize: 7, padding: "6px 2px", cursor: "pointer" }}>{a}</button>
        ))}
      </div>
      <div style={{ fontSize: 9, fontWeight: 600, marginBottom: 6 }}>Recent activity</div>
      {[{ name: "To Jin", sub: "Work", amt: "-$59", dir: "out" }, { name: "From Google", sub: "Salary", amt: "+$59", dir: "in" }, { name: "To David", sub: "Work", amt: "-$49", dir: "out" }].map((t, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0", borderBottom: "0.5px solid #222" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7 }}>{t.name[t.name.indexOf(" ") + 1]}</div>
            <div>
              <div style={{ fontSize: 8, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 7, color: "#888" }}>{t.sub}</div>
            </div>
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, color: t.dir === "in" ? "#00e5a0" : "#ff6b6b" }}>{t.amt}</div>
        </div>
      ))}
    </div>
  );
}
