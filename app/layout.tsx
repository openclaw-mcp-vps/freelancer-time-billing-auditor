import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Time Billing Auditor",
  description: "Audit freelancer timesheets for billing accuracy. Identify discrepancies and protect your budget."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a30f5aa-ce4d-4698-b05f-ff892e33ade8"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
