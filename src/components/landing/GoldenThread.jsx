import React, { useState, useEffect } from "react";

export default function GoldenThread() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-[2px] z-50 pointer-events-none hidden lg:block"
      style={{
        height: `${progress}%`,
        background: "linear-gradient(to bottom, #C9A961, rgba(201,169,97,0.3))",
        transition: "height 0.1s linear",
      }}
    />
  );
}