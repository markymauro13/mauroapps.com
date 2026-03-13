// src/app/solutions/page.jsx
import Solutions from "./Solutions";

export const metadata = {
  title: "Our Solutions",
  description: "Explore the range of mobile solutions and custom application development services offered by Mauro Apps.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
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
        "name": "Solutions",
        "item": "https://mauroapps.com/solutions"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Solutions />
    </>
  );
}
