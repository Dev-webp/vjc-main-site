import { Metadata } from "next";
import Head from "next/head";

// This metadata will only apply to this folder and its subpages
export const metadata: Metadata = {
    title: "UK Student Study Visa Consultants in Hyderabad Bangalore Without IELTS",
    description:
      "Grab the best UK Student Study Visa Consultants in Hyderabad Bangalore to know UK Student Visa and Know the UK study Visa Processing Time and know the UK Abroad Visa Requirements to apply Without IELTS and launch the UK Study Visa Application to Study Masters in United Kingdom",
    keywords:
      "UK Student Study Visa Consultants in Hyderabad, UK Student Study Visa Consultants in Bangalore, UK Student Visa Consultants, UK Study Visa Consultants, UK Study Visa Without IELTS, UK Student Visa Without IELTS, UK Study Visa Processing Time, Study Masters",
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
        <title>UK Student Study Visa Consultants in Hyderabad Bangalore Without IELTS</title>
        <meta
          name="description"
          content="Grab the best UK Student Study Visa Consultants in Hyderabad Bangalore to know UK Student Visa and Know the UK study Visa Processing Time and know the UK Abroad Visa Requirements to apply Without IELTS and launch the UK Study Visa Application to Study Masters in United Kingdom"
        />
        <meta name="keywords" content="UK Student Study Visa Consultants in Hyderabad, UK Student Study Visa Consultants in Bangalore, UK Student Visa Consultants, UK Study Visa Consultants, UK Study Visa Without IELTS, UK Student Visa Without IELTS, UK Study Visa Processing Time, Study Masters" />
        
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
