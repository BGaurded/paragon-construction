import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AnimationProvider({ children }) {
  const location = useLocation();
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;
      const isTouch = window.matchMedia("(pointer: coarse)").matches;

      const cleanups = [];
      const ctx = gsap.context(() => {
        ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize" });
        ScrollTrigger.defaults({ start: "top 82%", once: true });

        gsap.fromTo(
          pageRef.current,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.32, ease: "power2.inOut" }
        );

        const singles = gsap.utils.toArray("[data-reveal]", pageRef.current);
        singles.forEach((el) => {
          gsap.fromTo(
            el,
            { y: isTouch ? 28 : 44 },
            {
              y: 0,
              duration: isTouch ? 0.62 : 0.78,
              ease: "power3.out",
              immediateRender: false,
              clearProps: "transform",
              scrollTrigger: {
                trigger: el,
                start: isTouch ? "top 88%" : "top 82%",
                once: true,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        const groups = gsap.utils.toArray("[data-reveal-group]", pageRef.current);
        groups.forEach((group) => {
          const items = group.querySelectorAll("[data-reveal-item]");
          if (!items.length) return;
          gsap.fromTo(
            items,
            { y: isTouch ? 24 : 40 },
            {
              y: 0,
              duration: isTouch ? 0.58 : 0.76,
              ease: "power3.out",
              stagger: isTouch ? 0.08 : 0.12,
              immediateRender: false,
              clearProps: "transform",
              scrollTrigger: {
                trigger: group,
                start: isTouch ? "top 88%" : "top 82%",
                once: true,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        const parallaxTargets = gsap.utils.toArray("[data-parallax]", pageRef.current);
        parallaxTargets.forEach((el) => {
          gsap.to(el, {
            yPercent: isTouch ? 5 : 9,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") || el,
              start: "top bottom",
              end: "bottom top",
              scrub: isTouch ? 0.8 : 1.2,
            },
          });
        });

        if (!isTouch) {
          const hoverCards = gsap.utils.toArray("[data-hover-lift]");
          hoverCards.forEach((card) => {
            const onEnter = () =>
              gsap.to(card, {
                y: -8,
                boxShadow: "0 24px 48px rgba(27,33,36,0.2)",
                duration: 0.42,
                ease: "power3.out",
              });
            const onLeave = () =>
              gsap.to(card, {
                y: 0,
                boxShadow: "0 8px 26px rgba(35,43,47,0.06)",
                duration: 0.48,
                ease: "power3.out",
              });
            card.addEventListener("mouseenter", onEnter);
            card.addEventListener("mouseleave", onLeave);
            cleanups.push(() => {
              card.removeEventListener("mouseenter", onEnter);
              card.removeEventListener("mouseleave", onLeave);
            });
          });

          const magnets = gsap.utils.toArray("[data-magnetic]");
          magnets.forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.34, ease: "power3.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.34, ease: "power3.out" });
            const onMove = (e) => {
              const rect = el.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.09;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.09;
              xTo(x);
              yTo(y);
            };
            const onLeave = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseleave", onLeave);
            cleanups.push(() => {
              el.removeEventListener("mousemove", onMove);
              el.removeEventListener("mouseleave", onLeave);
            });
          });
        }
      }, pageRef);

      return () => {
        cleanups.forEach((fn) => fn());
        ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { dependencies: [location.pathname] }
  );

  return <div ref={pageRef}>{children}</div>;
}

