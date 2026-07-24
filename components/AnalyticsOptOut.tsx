"use client";
import { useState, useEffect } from "react";

export default function AnalyticsOptOut() {
  const [optedOut, setOptedOut] = useState(false);

  useEffect(() => {
    setOptedOut(document.cookie.includes("ga_consent=false"));
  }, []);

  function toggleOptOut() {
    if (optedOut) {
      document.cookie = "ga_consent=true; path=/; max-age=31536000; SameSite=Lax";
      setOptedOut(false);
    } else {
      document.cookie = "ga_consent=false; path=/; max-age=31536000; SameSite=Lax";
      if (typeof window !== "undefined") {
        // @ts-expect-error GA disable property
        window[`ga-disable-${process.env.NEXT_PUBLIC_GA_ID}`] = true;
      }
      setOptedOut(true);
    }
  }

  return (
    <div>
      <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.75rem", lineHeight: 1.6 }}>
        We use Google Analytics to understand how visitors use this site. You may opt out at any time.
      </p>
      <button
        onClick={toggleOptOut}
        style={{
          background: optedOut ? "rgba(205,218,176,0.18)" : "rgba(255,255,255,0.08)",
          border: optedOut ? "1px solid #cddab0" : "1px solid rgba(255,255,255,0.2)",
          color: optedOut ? "#cddab0" : "rgba(255,255,255,0.78)",
          borderRadius: "0.375rem", padding: "0.4rem 1rem", fontSize: "0.8rem", cursor: "pointer",
          fontFamily: "inherit", fontWeight: 600, transition: "all 0.2s",
        }}
      >
        {optedOut ? "✓ Opted Out of Analytics" : "Opt Out of Analytics"}
      </button>
    </div>
  );
}
