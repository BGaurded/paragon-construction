import React from "react";
import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const sectionRef = React.useRef(null);
  const badgeRef = React.useRef(null);
  const headlineRef = React.useRef(null);
  const subheadingRef = React.useRef(null);
  const ctaWrapRef = React.useRef(null);
  const scrollHintRef = React.useRef(null);
  const bgRef = React.useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        headlineRef.current,
        { autoAlpha: 0, y: 24, scale: 1.05 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1.04, ease: "expo.out" }
      )
        .fromTo(
          subheadingRef.current,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.78, ease: "power3.out" },
          "-=0.42"
        )
        .fromTo(
          ctaWrapRef.current?.children || [],
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.68, stagger: 0.16, ease: "power2.out" },
          "-=0.28"
        )
        .fromTo(
          badgeRef.current,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.56, ease: "power2.out" },
          "-=0.14"
        )
        .fromTo(
          scrollHintRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.42, ease: "power2.out" },
          "-=0.1"
        );

      gsap.to(bgRef.current, {
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: sectionRef }
  );

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" data-reveal>
      <div
        ref={bgRef}
        data-parallax
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${IMAGES.heroHome}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f272b]/78 via-[#2F5F6F]/42 to-[#1b2124]/86" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <div ref={badgeRef}>
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#C9A961] uppercase mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Licensed</span>
            <span aria-hidden className="text-white/40">
              &bull;
            </span>
            <span>Insured</span>
            <span aria-hidden className="text-white/40">
              &bull;
            </span>
            <span className="inline-flex items-center gap-2">
              <span>GAF Certified</span>
              <GafMasterEliteBadge size="sm" />
            </span>
          </p>
        </div>

        <h1
          ref={headlineRef}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.04] tracking-[0.015em] drop-shadow-[0_10px_34px_rgba(0,0,0,0.36)]"
        >
          Greater Houston&apos;s
          <br />
          <span className="font-medium text-[#C9A961]">Premier Roofing Experts</span>
        </h1>

        <p
          ref={subheadingRef}
          className="mt-7 text-base sm:text-lg text-white font-body max-w-2xl mx-auto leading-relaxed [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
        >
          Serving Spring, The Woodlands, Conroe, Sugar Land, Cypress, and the Greater Houston Area with premium
          residential and commercial roofing solutions.
        </p>

        <div
          ref={ctaWrapRef}
          className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button data-magnetic className="w-full sm:w-auto bg-[#C9A961] text-[#2B2D2F] hover:bg-white hover:text-[#2F5F6F] font-semibold px-10 py-6 text-base transition-all duration-300 animate-pulse-gold min-h-12 touch-manipulation shadow-[0_14px_32px_rgba(201,169,97,0.35)] hover:-translate-y-0.5">
              Request Free Inspection
            </Button>
          </Link>
          <a
            href="tel:+12816594129"
            className="flex items-center justify-center gap-2 border border-white/30 text-white hover:border-[#C9A961] hover:text-[#C9A961] px-8 py-3 rounded-md transition-all duration-300 text-base font-medium min-h-12 touch-manipulation w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden />
            Call (281) 659-4129
          </a>
        </div>
      </div>

      <button
        ref={scrollHintRef}
        type="button"
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#C9A961] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] rounded-full p-2"
        aria-label="Scroll to services section"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" aria-hidden />
      </button>
    </section>
  );
}
