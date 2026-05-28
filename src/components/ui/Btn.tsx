import { ReactNode, CSSProperties } from "react";

export default function Btn({ children, outline, dark, small, style: extStyle }: { children: ReactNode; outline?: boolean; dark?: boolean; small?: boolean; style?: CSSProperties }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: small ? 12 : 13,
    fontWeight: 600,
    letterSpacing: "0.03em",
    padding: small ? "7px 16px" : "10px 22px",
    borderRadius: 6,
    cursor: "pointer",
    border: "none",
    transition: "opacity 0.15s",
    ...extStyle,
  };
  if (outline && dark) return <button style={{ ...base, background: "transparent", border: "1px solid rgba(255,255,255,0.35)", color: "#fff" } as any}>{children}</button>;
  if (outline) return <button style={{ ...base, background: "transparent", border: "1px solid rgba(0,0,0,0.25)", color: "#111" } as any}>{children}</button>;
  if (dark) return <button style={{ ...base, background: "#0066FF", color: "#fff" } as any}>{children}</button>;
  return <button style={{ ...base, background: "#0066FF", color: "#fff" } as any}>{children}</button>;
}
