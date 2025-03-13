import { Metadata } from 'next';
import { Inter, PT_Serif, Playfair_Display } from 'next/font/google';
import Script from 'next/script'; // Import Next.js Script
import './globals.css';
import FloatingWhatsApp from '@/app/components/FloatingWhatsapp';
import Nav from '@/app/components/Nav';
import TawkToChat from '@/app/components/TawkToChat';

// Load Google Fonts using next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'Best Immigration Visa Consultants in Hyderabad Bangalore PR Visa| Study Visa| Job Seeker Visa| Visit Visa| Investor Visa| Tourist Visa| Dependent Visa| Work Permit Visa',
  description: 'Best Immigration Visa Consultants in Hyderabad and Bangalore Process for PR Visa, Study Visa, Job Seeker Visa, Visit Visa, Investor Visa, Tourist Visa, Dependent Visa, Work Permit Visa and much more so Settle your Life in Abroad with Permanent Residency Visa, Germany Opportunity Card, Study or Student Visa Immigration, Job Seeker Visa, Work Permit Visa and much more options for your future so Contact Immediately for free Assessment and Check eligibility',
  keywords: 'Best Immigration Visa Consultants in Hyderabad, Best Immigration Visa Consultants in Bangalore, Best Immigration Visa Consultants, Visa Consultants, Best Immigration Consultants, Best Visa Consultants, Immigration Visa Consultants, Visa Consultants, PR Visa, Permanent Residency Visa, Germany Opportunity Card, Study or Student Visa Immigration, Job Seeker Visa, Work Permit Visa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ptSerif.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Facebook Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2003555746606868');
                fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-pt-serif)' }}>
        <Nav />
        {children}
        <FloatingWhatsApp />
        <TawkToChat />

        {/* NoScript Pixel (For Users with JS Disabled) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2003555746606868&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
