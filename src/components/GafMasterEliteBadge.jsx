import React from "react";
import { SITE } from "@/lib/siteConfig";

const HEIGHT_CLASS = { sm: "h-7", md: "h-9", lg: "h-11" };

/**
 * Replace /public/gaf-master-elite-badge.svg with the official asset from the GAF Partner Portal when available.
 */
export default function GafMasterEliteBadge({ size = "md", className = "" }) {
  const hClass = HEIGHT_CLASS[size] || HEIGHT_CLASS.md;
  return (
    <a
      href={SITE.gafUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] ${className}`}
      aria-label="GAF Master Elite certification — opens GAF.com in a new tab"
    >
      <img
        src="/gaf-master-elite-badge.svg"
        alt=""
        className={`${hClass} w-auto`}
        decoding="async"
      />
    </a>
  );
}
