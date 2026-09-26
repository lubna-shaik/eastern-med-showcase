import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      const nodes = document.querySelectorAll<HTMLElement>(".reveal");
      observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer?.unobserve(entry.target); } }), { threshold: 0.12 });
      nodes.forEach((node) => observer?.observe(node));
    }, 150);
    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);
  return null;
}
