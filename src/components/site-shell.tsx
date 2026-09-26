import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "./brand";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="site-container grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
          <Brand />
          <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link-active" }}>{item.label}</Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="premium" className="hidden sm:inline-flex"><Link to="/products">Explore Products</Link></Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
            <div className="site-container grid gap-1 py-4">
              {navItems.map((item) => <Link key={item.to} to={item.to} className="mobile-nav-link" onClick={() => setOpen(false)}>{item.label}</Link>)}
              <Button asChild variant="premium" className="mt-3 sm:hidden"><Link to="/products" onClick={() => setOpen(false)}>Explore Products</Link></Button>
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.2fr_0.7fr_1fr]">
        <div><Brand inverse /><p className="mt-6 max-w-sm text-sm leading-7 text-footer-muted">Better Supplies. Healthier Tomorrow.</p><p className="mt-4 max-w-sm text-sm leading-7 text-footer-muted">Quality medical products and dependable healthcare supply solutions for institutions and professionals.</p></div>
        <div><h2 className="footer-title">Quick Links</h2><nav className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-footer-muted">{navItems.map((item) => <Link key={item.to} to={item.to} className="transition-colors hover:text-primary-foreground">{item.label}</Link>)}</nav></div>
        <div><h2 className="footer-title">Contact</h2><div className="mt-5 space-y-4 text-sm text-footer-muted"><a href="mailto:info@easternmedsupplies.com" className="footer-contact"><Mail />info@easternmedsupplies.com</a><a href="tel:+XXXXXXXXXXX" className="footer-contact"><Phone />+XX XXX XXX XXXX</a><p className="footer-contact"><MapPin />Business address — placeholder</p></div></div>
      </div>
      <div className="border-t border-footer-line"><div className="site-container flex flex-col gap-2 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Eastern Med Supplies. All Rights Reserved.</p><p>Company details shown as placeholders where not provided.</p></div></div>
    </footer>
  );
}
