export default function CheckItem({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
      <span style={{ marginTop: 2, width: 16, height: 16, borderRadius: "50%", border: `1.5px solid ${dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="8" height="6" viewBox="0 0 8 6"><polyline points="1,3 3,5 7,1" fill="none" stroke={dark ? "rgba(255,255,255,0.7)" : "#333"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.75)" : "#444", lineHeight: 1.5 }}>{label}</span>
    </div>
  );
}
