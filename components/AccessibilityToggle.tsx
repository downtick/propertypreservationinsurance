"use client";
import { useEffect, useState } from "react";

const SCALES = [
  { label: "A", value: "1", title: "Default text size" },
  { label: "A+", value: "1.15", title: "Larger text" },
  { label: "A++", value: "1.3", title: "Largest text" },
];

export default function AccessibilityToggle() {
  const [open, setOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [fs, setFs] = useState("1");

  useEffect(() => {
    try {
      setContrast(localStorage.getItem("a11y-contrast") === "1");
      setFs(localStorage.getItem("a11y-fs") || "1");
    } catch {}
  }, []);

  function applyContrast(next: boolean) {
    setContrast(next);
    document.documentElement.classList.toggle("a11y-contrast", next);
    try { localStorage.setItem("a11y-contrast", next ? "1" : "0"); } catch {}
  }

  function applyScale(value: string) {
    setFs(value);
    document.documentElement.style.setProperty("--fs", value);
    try { localStorage.setItem("a11y-fs", value); } catch {}
  }

  return (
    <div style={{ position: "fixed", right: "1rem", bottom: "1rem", zIndex: 60 }}>
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          style={{
            position: "absolute", bottom: "3.75rem", right: 0, width: "248px",
            background: "#fff", borderRadius: "0.85rem", padding: "1rem 1.1rem",
            boxShadow: "0 12px 40px rgba(32,38,27,0.22)", border: "1px solid #ddd7c4",
          }}
        >
          <p style={{ fontWeight: 700, color: "#2b3324", fontSize: "0.9rem", margin: "0 0 0.6rem" }}>
            Accessibility
          </p>

          <p style={{ fontSize: "0.78rem", color: "#7b8271", margin: "0 0 0.4rem" }}>Text size</p>
          <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.9rem" }}>
            {SCALES.map((s) => (
              <button
                key={s.value}
                onClick={() => applyScale(s.value)}
                title={s.title}
                aria-pressed={fs === s.value}
                style={{
                  flex: 1, padding: "0.5rem 0", borderRadius: "0.45rem", cursor: "pointer",
                  fontWeight: 700, fontFamily: "inherit",
                  border: fs === s.value ? "2px solid #55663d" : "2px solid #ddd7c4",
                  background: fs === s.value ? "#eef1e2" : "#fff", color: "#3c4a2a",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
            <span style={{ fontSize: "0.85rem", color: "#2b3324", fontWeight: 600 }}>High contrast</span>
            <button
              type="button"
              role="switch"
              aria-checked={contrast}
              aria-label="High contrast mode"
              className="toggle-track"
              data-on={contrast}
              onClick={() => applyContrast(!contrast)}
            />
          </label>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Accessibility options"
        style={{
          width: "52px", height: "52px", borderRadius: "50%", border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #74874f, #55663d)", color: "#fff", fontSize: "1.5rem",
          boxShadow: "0 8px 24px rgba(85,102,61,0.4)", display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <span aria-hidden="true">♿</span>
      </button>
    </div>
  );
}
