import { Metadata } from "next";
import Head from "next/head";

// This metadata will only apply to this folder and its subpages
export const metadata: Metadata = {
  title: "Germany Opportunity Card Eligibility - Best Immigration Visa Consultants",
  description:
    "Apply for Germany Opportunity Card and check eligibility with the best immigration visa consultants.",
  keywords: "Germany, Opportunity Card, visa, immigration, work, travel",
};

export default function GermanyOpportunityCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Metadata and Google Tag Manager specific to this page */}
      <Head>
        <title>Germany Opportunity Card Eligibility - Best Immigration Visa Consultants</title>
        <meta
          name="description"
          content="Apply for Germany Opportunity Card and check eligibility with the best immigration visa consultants."
        />
        <meta name="keywords" content="Germany, Opportunity Card, visa, immigration, work, travel" />
        
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16767451796');
            `,
          }}
        ></script>
      </Head>

      {/* Render the children of this layout (which will be the content of the page) */}
      {children}
    </>
  );
}
