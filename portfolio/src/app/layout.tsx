import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono as JetBrainsMono,
  Playfair_Display as PlayfairDisplay,
} from "next/font/google";
import "./globals.css";

const playfairDisplay = PlayfairDisplay({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrainsMono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jeshua David | Video Editor & Visual Storyteller",
  description:
    "Portfolio of Jeshua David, a video editor and visual storyteller crafting cinematic narratives with 3D editorial flair.",
  metadataBase: new URL("https://agentic-d505e08e.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jeshua David — Video Editor & Visual Storyteller",
    description:
      "Experience the cinematic portfolio of Jeshua David blending editorial typography with immersive 3D storytelling.",
    url: "https://agentic-d505e08e.vercel.app",
    siteName: "Jeshua David Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeshua David Portfolio cover graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeshua David | Video Editor & Visual Storyteller",
    description:
      "Cinematic narratives with editorial typography and immersive 3D direction.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050505] text-[#EDEDED]">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
