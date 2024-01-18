import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "medpaideia",
  description:
    "We are thrilled to offer you a comprehensive solution tailored to your learning needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="canonical" href="https://www.medpaideia.in/" />
        <link rel="manifest" href="/manifest.json" />
        {/* og image */}
        <meta
          property="og:image"
          content={`https://www.medpaideia.in/image/og-image.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`medpaideia Image`} />
      </head>
      <body className={roboto.className}>
        <Analytics />
        <SpeedInsights />
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
