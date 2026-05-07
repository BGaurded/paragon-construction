import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/siteConfig";

export default function PageSEO({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
  jsonLd,
}) {
  const canonical = `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "") || SITE.url;
  const pageTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const image = ogImage || `${SITE.url}/gaf-master-elite-badge.svg`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export function localBusinessSchema() {
  const { streetAddress, addressLocality, addressRegion, postalCode, addressCountry } = SITE.address;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/RoofingContractor",
    name: SITE.name,
    image: `${SITE.url}/gaf-master-elite-badge.svg`,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    areaServed: SITE.serviceCities.map((city) => ({
      "@type": "City",
      name: `${city}, TX`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
  };
}
