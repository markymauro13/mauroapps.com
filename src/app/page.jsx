// src/app/page.jsx
import Home from "./components/Home/Home";

export const metadata = {
  title: "Mauro Apps — Beautiful Apps, Thoughtfully Crafted",
  description: "Cross Platform App Studio specialized in building premium mobile applications. We design and develop intuitive interfaces, powerful features, and seamless experiences for iOS and Android.",
  openGraph: {
    title: "Mauro Apps — Beautiful Apps, Thoughtfully Crafted",
    description: "Cross Platform App Studio specialized in building premium mobile applications.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mauro Apps",
    "url": "https://mauroapps.com",
    "logo": "https://mauroapps.com/assets/logo.png",
    "description": "Cross Platform App Studio specialized in building premium mobile applications.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/mauroapps"
    ]
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mauro Apps Portfolio",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Home />
    </>
  );
}
