import { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header1";

// Load the PT Serif font
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  title: "Germany Opportunity Card Eligibility Job Seeker Best Visa Immigration Consultants in Hyderabad Bangalore",
  description:
    "Germany Opportunity Card is the best way to settle in Germany and Check Germany Opportunity Card Eligibility also apply online with Best Visa Immigration Consultants in Hyderabad and Bangalore also get to know the huge benefits of Germany Opportunity Card",
  keywords: "Germany, Opportunity Card, visa, immigration, work, travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ptSerif.variable}>
      <head>
        {/* SEO Meta Tags */}
        <meta
          name="keywords"
          content="Germany, Opportunity Card, visa, immigration, work, travel"
        />

        {/* Google Analytics using next/script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16767451796');
            `,
          }}
        />

        {/* Tawk.to Chat Widget using next/script */}
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6731ab974304e3196ae000d2/1icd0cijr';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className="font-pt-serif">
        <Header />
        {children}
      </body>
    </html>
  );
}
