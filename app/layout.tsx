import { Metadata } from 'next';
import { Inter, PT_Serif, Playfair_Display } from 'next/font/google';
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
      <head />
      <body style={{ fontFamily: 'var(--font-pt-serif)' }}>
        <Nav />
        {children}
        <FloatingWhatsApp />
        <TawkToChat />
      </body>
    </html>
  );
}
