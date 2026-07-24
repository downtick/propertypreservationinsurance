import type { Metadata } from "next";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You — Your Quote Request",
  description: "Your information has been received. Someone will be in touch soon about your property preservation or field inspection insurance quote.",
  robots: { index: false },
};

export default function ThankYou() {
  return <ThankYouContent />;
}
