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
      <svg
        viewBox="0 0 200 56"
        role="img"
        aria-label="GAF Master Elite Certified"
        className={`${hClass} w-auto`}
      >
        <defs>
          <linearGradient id="gafBadgeBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A4D6B" />
            <stop offset="100%" stopColor="#0F3548" />
          </linearGradient>
        </defs>
        <rect width="200" height="56" rx="6" fill="url(#gafBadgeBg)" stroke="#C9A961" strokeWidth="1.5" />
        <text
          x="100"
          y="24"
          fill="#FFFFFF"
          fontFamily="Georgia, Times New Roman, serif"
          fontSize="17"
          fontWeight="700"
          textAnchor="middle"
        >
          GAF
        </text>
        <text
          x="100"
          y="44"
          fill="#C9A961"
          fontFamily="Arial, system-ui, sans-serif"
          fontSize="9"
          fontWeight="600"
          textAnchor="middle"
          letterSpacing="0.12em"
        >
          MASTER ELITE(R) CERTIFIED
        </text>
      </svg>
    </a>
  );
}
