import { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header1";

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
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <meta
          name="keywords"
          content="Germany, Opportunity Card, visa, immigration, work, travel"
        />
        {/* Link to the "Inter" font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16767451796');
            `,
          }}
        />
        {/* Tawk.to Chat Widget */}
        <script
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
      <body style={{ fontFamily: '"PT Serif", serif' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
