import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduvoyagers.com"),
  title: {
    default: "EduVoyagers | Experiential Learning & Educational Journeys",
    template: "%s | EduVoyagers",
  },
  description:
    "EduVoyagers designs curriculum-aligned experiential learning journeys, field experiences and outdoor education programs for K-12 students.",
  keywords: [
    "experiential learning",
    "school trips India",
    "outdoor education",
    "curriculum aligned journeys",
    "STEM field trips",
    "Himalayan outdoor leadership",
    "K-12 educational journeys",
    "student field experiences",
  ],
  authors: [{ name: "EduVoyagers Experiential Education" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eduvoyagers.com",
    siteName: "EduVoyagers",
    title: "EduVoyagers | Learning Beyond the Classroom",
    description:
      "EduVoyagers creates curriculum-aligned journeys, field experiences and outdoor learning programs that help students learn through exploration, challenge, collaboration and real-world discovery.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "EduVoyagers - Experiential Learning Beyond the Classroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduVoyagers | Learning Beyond the Classroom",
    description:
      "Experiential education company designing curriculum-aligned journeys and field learning for K-12 students.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-charcoal selection:bg-forest selection:text-sand-light">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
