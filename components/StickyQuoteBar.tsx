"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Mobile-only sticky "Get a Quote" bar. Hidden on desktop (CSS media query in
 * globals.css), slides up once the user scrolls past the hero. Sits below the
 * AccessibilityToggle (z-index 55 < 60) with right padding so the CTA never
 * overlaps that floating button. Slide animation is disabled under
 * prefers-reduced-motion via the global rule in globals.css.
 */
export default function StickyQuoteBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mobile-quote-bar" data-visible={visible} aria-hidden={!visible}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, color: "#3c4a2a", fontSize: "0.95rem", lineHeight: 1.15 }}>
          Property preservation insurance
        </div>
        <div style={{ fontSize: "0.78rem", color: "#7b8271" }}>Fast quotes for vacant-property pros</div>
      </div>
      <Link
        href="/quote"
        className="btn-amber"
        style={{ padding: "0.65rem 1.15rem", fontSize: "0.9rem", whiteSpace: "nowrap" }}
        tabIndex={visible ? 0 : -1}
      >
        Get a Quote
      </Link>
    </div>
  );
}
