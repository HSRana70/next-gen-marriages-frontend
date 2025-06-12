import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from 'next/script';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JoinMarriages | Attend Indian Weddings & Celebrate Love",
  description: "JoinMarriages connects you to vibrant Indian weddings worldwide. Attend, experience, and celebrate cultural traditions, love, and unforgettable ceremonies.",
  keywords: [
    "How to attend an Indian wedding as a foreigner",
    "Participate in Indian wedding ceremony",
    "Join an Indian wedding in India",
    "Indian wedding experience",
    "Attend Indian wedding",
    "Traditional Indian wedding",
    "Cultural travel India",
    "Participate in Indian wedding ceremony",
    "Indian wedding cultural experience for travelers",
    "Indian wedding tourism",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
     
      <meta name="keywords" content='visa consults' />


     <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-RH2QNGFGK7`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RH2QNGFGK7');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
