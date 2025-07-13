import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

// Metadata
export const metadata: Metadata = {
  title: "Frozen In Time – Handmade Resin & Crochet Keepsakes",
  description: "Discover handmade resin and crochet keepsakes that capture your memories in wearable art. Order your personalized piece today.",
  openGraph: {
    title: "Frozen In Time – Handmade Resin & Crochet Keepsakes",
    description: "Discover handmade resin and crochet keepsakes that capture your memories in wearable art. Order your personalized piece today.",
    url: "https://yourdomain.com", // replace with your live domain
    siteName: "Frozen In Time",
    images: [
      {
        url: "http://localhost:3000/images/og-image.jpg", // replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Frozen In Time – Handmade Resin & Crochet Keepsakes",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.com"), // replace with your live domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable} 
          ${inter.variable} 
          antialiased
        `}
      >
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              borderRadius: "8px",
              background: "green",
              color: "white",
            },
          }}
        />
        
      </body>
    </html>
  );
}
