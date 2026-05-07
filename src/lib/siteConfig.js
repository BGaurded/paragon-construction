/** Site-wide constants for SEO, schema, and contact blocks */
export const SITE = {
  name: "Paragon Partners Construction",
  get url() {
    return (import.meta.env.VITE_SITE_URL || "https://paragonpartners.com").replace(/\/$/, "");
  },
  phoneDisplay: "(281) 659-4129",
  phoneTel: "+12816594129",
  emails: ["brian@ppconstruction.com", "remington@paragonpartnersconstruction.com"],
  address: {
    streetAddress: "25420 Kuykendahl Rd. Ste B100",
    addressLocality: "Tomball",
    addressRegion: "TX",
    postalCode: "77375",
    addressCountry: "US",
  },
  serviceCities: ["Spring", "The Woodlands", "Conroe", "Cypress", "Sugar Land", "Houston"],
  gafUrl: "https://www.gaf.com",
};

export function formatAddressLines() {
  const { streetAddress, addressLocality, addressRegion, postalCode } = SITE.address;
  return [`${streetAddress}`, `${addressLocality}, ${addressRegion} ${postalCode}`];
}
