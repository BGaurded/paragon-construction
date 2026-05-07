import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * SPA default: scroll position persists across route changes.
 * Scroll to top on navigation unless a hash target is present.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      if (!id) {
        window.scrollTo(0, 0);
        return;
      }
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    });
  }, [pathname, hash]);

  return null;
}
