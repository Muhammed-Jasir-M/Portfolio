import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammed Jasir M | Software Developer",
  description:
    "Portfolio of Muhammed Jasir M – Full-stack developer specializing in Flutter, React, and the MERN stack. Explore projects, resume, contact info and other details.",
  keywords: [
    "Muhammed Jasir M",
    "Software Developer",
    "Flutter Developer",
    "MERN Stack Developer",
    "React Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [
    { name: "Muhammed Jasir M", url: "https://muhammed-jasir-m.vercel.app" },
  ],
  creator: "Muhammed Jasir M",
  openGraph: {
    title: "Muhammed Jasir M | Software Developer",
    description:
      "Explore my developer portfolio showcasing my projects, contact info, skills, experience, education and other details",
    url: "https://muhammed-jasir-m.vercel.app",
    siteName: "Muhammed Jasir M Portfolio",
    images: [
      {
        url: "https://muhammed-jasir-m.vercel.app/assets/profile/muhammed-jasir-m.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Jasir M",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Jasir M | Software Developer",
    description: "Check out my developer portfolio.",
    creator: "@Muhammed_Jasir1",
    images: [
      "https://muhammed-jasir-m.vercel.app/assets/profile/muhammed-jasir-m.png",
    ],
  },
  verification: {
    google: "2d1911838c7295cc", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfilePage"],
    name: "Muhammed Jasir M",
    description:
      "Full-stack developer specializing in Flutter, React, and MERN stack.",
    url: "https://muhammed-jasir-m.vercel.app",
    image:
      "https://muhammed-jasir-m.vercel.app/assets/profile/muhammed-jasir-m.png",
    sameAs: [
      "https://www.linkedin.com/in/Muhammed-Jasir-M",
      "https://github.com/Muhammed-Jasir-M",
      "https://x.com/Muhammed_Jasir1",
    ],
    jobTitle: "Software Developer",
  };

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <StairTransition />
        <main className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
