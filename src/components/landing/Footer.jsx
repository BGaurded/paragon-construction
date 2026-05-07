import React from "react";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";
import { SITE } from "@/lib/siteConfig";

const SERVICES_LINKS = [
  { label: "Residential Roofing", href: "/services/residential-roofing" },
  { label: "Commercial Roofing", href: "/services/commercial-roofing" },
  { label: "Storm Damage", href: "/services/storm-damage" },
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Gutter Systems", href: "/services/gutter-systems" },
  { label: "Siding & Exterior", href: "/services/siding-exterior" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Warranty Information", href: "/about#warranty" },
];

export default function Footer() {
  return (
    <footer className="bg-[#23282b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] rounded-sm">
              <img src={IMAGES.logo} alt="Paragon Partners Construction" className="h-12 mb-6" loading="lazy" decoding="async" />
            </Link>
            <p className="text-white/55 text-sm font-body leading-relaxed mb-6">
              Greater Houston&apos;s premier roofing experts. Delivering premium craftsmanship and lasting protection for
              homes and businesses.
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-wider uppercase text-white/40">GAF Certified</span>
              <GafMasterEliteBadge size="sm" />
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-[#C9A961] hover:text-[#C9A961] text-white/40 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
                  aria-label={`Social media link ${i + 1}`}
                >
                  <Icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.22em] text-[#C9A961] uppercase mb-6">Services</h2>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-[#C9A961] transition-colors duration-300 font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.22em] text-[#C9A961] uppercase mb-6">Company</h2>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-[#C9A961] transition-colors duration-300 font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.22em] text-[#C9A961] uppercase mb-6">Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" aria-hidden />
                <div className="flex flex-col gap-1.5">
                  <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/35">Remington D&apos;Abbraccio</p>
                  <a href="mailto:remington@paragonpartnersconstrction.com" className="text-sm text-white/50 hover:text-white transition-colors font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm break-all">
                    remington@paragonpartnersconstrction.com
                  </a>
                  <a href="tel:+13468146310" className="text-sm text-white/50 hover:text-white transition-colors font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm">
                    346-814-6310
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" aria-hidden />
                <div className="flex flex-col gap-1.5">
                  <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/35">Brian Gonzalez</p>
                  <a href="mailto:brian@ppcconstruction.com" className="text-sm text-white/50 hover:text-white transition-colors font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm break-all">
                    brian@ppcconstruction.com
                  </a>
                  <a href="tel:+18322576336" className="text-sm text-white/50 hover:text-white transition-colors font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm">
                    832-257-6336
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" aria-hidden />
                <span className="text-sm text-white/50 font-body">
                  Office:{" "}
                  <a href={`tel:${SITE.phoneTel}`} className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm">
                    {SITE.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" aria-hidden />
                <span className="text-sm text-white/50 font-body">
                  Hours: Mon-Fri: 7AM-6PM, Sat: 8AM-2PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" aria-hidden />
                <span className="text-sm text-white/50 font-body">
                  Address: 25420 Kuykendahl Rd, Ste B100, Tomball, TX{" "}
                  <span className="font-heading tracking-[0.02em] text-white/70">77375</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-body text-center sm:text-left">
            © {new Date().getFullYear()} Paragon Partners Construction. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs text-white/30 font-mono tracking-wider uppercase">Licensed & Insured</span>
            <span className="w-px h-3 bg-white/10 hidden sm:block" aria-hidden />
            <GafMasterEliteBadge size="sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
