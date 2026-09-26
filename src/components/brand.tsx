import { Link } from "@tanstack/react-router";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Eastern Med Supplies home">
      <span className={`brand-mark ${inverse ? "brand-mark-inverse" : ""}`} aria-hidden="true">
        <span className="brand-cross">+</span>
        <span className="brand-wave" />
      </span>
      <span className="min-w-0">
        <span className={`block font-display text-[0.94rem] font-bold leading-none ${inverse ? "text-primary-foreground" : "text-deep"}`}>EASTERN MED</span>
        <span className={`mt-1 block text-[0.58rem] font-semibold leading-none tracking-[0.26em] ${inverse ? "text-footer-muted" : "text-primary"}`}>SUPPLIES</span>
      </span>
    </Link>
  );
}
