// src/app/contact/page.jsx
import Contact from "./Contact";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Mauro Apps. Have an idea for a mobile app? We'd love to hear from you and discuss how we can help bring it to life.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mauroapps.com"
      },
       {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://mauroapps.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />
    </>
  );
}
