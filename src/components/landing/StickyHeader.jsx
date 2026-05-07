import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "@/lib/images";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const SERVICES_DROPDOWN = [
  { label: "Residential Roofing", href: "/services/residential-roofing" },
  { label: "Commercial Roofing", href: "/services/commercial-roofing" },
  { label: "Storm Damage", href: "/services/storm-damage" },
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Gutter Systems", href: "/services/gutter-systems" },
  { label: "Siding & Exterior", href: "/services/siding-exterior" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#", dropdown: true },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const mobileNavRef = React.useRef(null);
  const headerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useGSAP(
    () => {
      gsap.to(headerRef.current, {
        y: scrolled ? 0 : -2,
        duration: 0.45,
        ease: "power3.out",
      });
    },
    { dependencies: [scrolled] }
  );

  useGSAP(
    () => {
      if (!mobileOpen || !mobileNavRef.current) return;
      gsap.fromTo(
        mobileNavRef.current.querySelectorAll("[data-mobile-item]"),
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.46, stagger: 0.07, ease: "power3.out" }
      );
    },
    { dependencies: [mobileOpen] }
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#2F5F6F]/92 backdrop-blur-xl shadow-[0_12px_38px_rgba(24,38,45,0.42)] py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] rounded-sm">
            <img
              src={IMAGES.logo}
              alt="Paragon Partners Construction — home"
              className={`transition-all duration-500 ${scrolled ? "h-10" : "h-14"}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                  className="nav-link flex items-center gap-1 text-sm font-body font-medium text-white/80 hover:text-[#C9A961] transition-colors duration-300 tracking-[0.14em] uppercase"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-controls="services-menu"
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id="services-menu"
                        role="menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-[#1f2528]/97 border border-white/10 rounded-lg shadow-[0_26px_42px_rgba(10,15,18,0.58)] z-50 overflow-hidden"
                      >
                        {SERVICES_DROPDOWN.map((s) => (
                          <Link
                            key={s.href}
                            role="menuitem"
                            to={s.href}
                            className="block px-5 py-3 text-sm text-white/70 hover:text-[#C9A961] hover:bg-white/[0.07] transition-colors duration-200 border-b border-white/5 last:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C9A961]"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-link text-sm font-body font-medium text-white/80 hover:text-[#C9A961] transition-colors duration-300 tracking-[0.14em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] rounded-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12816594129"
              className="flex items-center gap-2 text-[#C9A961] text-sm font-medium hover:text-white transition-colors tracking-[0.04em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] rounded-sm"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden />
              (281) 659-4129
            </a>
            <Link to="/contact">
              <Button data-magnetic className="bg-[#C9A961] text-[#2B2D2F] hover:bg-white hover:text-[#2F5F6F] font-semibold px-6 shadow-[0_8px_22px_rgba(201,169,97,0.35)] transition-all duration-300 min-h-10 touch-manipulation">
                Request Free Inspection
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#2B2D2F]/98 backdrop-blur-lg pt-20 px-6 overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav ref={mobileNavRef} className="flex flex-col gap-4 mt-8" aria-label="Mobile primary">
              <Link
                data-mobile-item
                to="/"
                className="text-2xl font-heading text-white/90 hover:text-[#C9A961] transition-colors tracking-wider py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
              >
                Home
              </Link>

              <div>
                <button
                  data-mobile-item
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-heading text-white/90 hover:text-[#C9A961] transition-colors tracking-wider py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform shrink-0 ${mobileServicesOpen ? "rotate-180" : ""}`} aria-hidden />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l border-[#C9A961]/30"
                    >
                      {SERVICES_DROPDOWN.map((s) => (
                        <Link
                          data-mobile-item
                          key={s.href}
                          to={s.href}
                          className="block py-2 text-lg text-white/70 hover:text-[#C9A961] transition-colors font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                data-mobile-item
                to="/about"
                className="text-2xl font-heading text-white/90 hover:text-[#C9A961] transition-colors tracking-wider py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
              >
                About
              </Link>
              <Link
                data-mobile-item
                to="/service-areas"
                className="text-2xl font-heading text-white/90 hover:text-[#C9A961] transition-colors tracking-wider py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
              >
                Service Areas
              </Link>
              <Link
                data-mobile-item
                to="/contact"
                className="text-2xl font-heading text-white/90 hover:text-[#C9A961] transition-colors tracking-wider py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
              >
                Contact
              </Link>

              <div className="border-t border-white/10 pt-6 mt-4 space-y-4">
                <a
                  data-mobile-item
                  href="tel:+12816594129"
                  className="flex items-center gap-3 text-[#C9A961] text-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A961] rounded-sm"
                >
                  <Phone className="w-5 h-5 shrink-0" aria-hidden />
                  (281) 659-4129
                </a>
                <Link to="/contact">
                  <Button data-mobile-item data-magnetic className="w-full bg-[#C9A961] text-[#2B2D2F] hover:bg-white font-semibold py-6 text-lg min-h-12 touch-manipulation">
                    Request Free Inspection
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
