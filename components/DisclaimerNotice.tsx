import Link from "next/link";

/**
 * Short inline disclaimer for content / informational pages.
 * Full disclaimer lives at /disclaimer.
 */
export default function DisclaimerNotice() {
  return (
    <div
      style={{
        background: "#eef1e2",
        border: "1px solid #ddd7c4",
        borderRadius: "0.5rem",
        padding: "0.9rem 1.1rem",
        fontSize: "0.82rem",
        color: "#7b8271",
        lineHeight: 1.6,
      }}
    >
      <strong style={{ color: "#3c4a2a" }}>General information only.</strong> This page is
      for educational purposes and is not insurance, legal, or financial advice. It does not
      bind, guarantee, or confirm coverage. Coverage, terms, and availability vary by carrier,
      state, and individual risk. See our full{" "}
      <Link href="/disclaimer" style={{ color: "#55663d", fontWeight: 600 }}>disclaimer</Link>.
    </div>
  );
}
