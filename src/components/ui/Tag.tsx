import { ReactNode } from "react";

export default function Tag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "3px 10px",
      borderRadius: 4,
      border: dark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.15)",
      color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)",
      marginBottom: 8,
    }}>{children}</span>
  );
}
