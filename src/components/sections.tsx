import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, BriefcaseMedical, Headphones, HeartHandshake, PackageCheck, ShieldCheck, Stethoscope, Truck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

export function SectionHeader({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={`section-header ${align === "center" ? "mx-auto text-center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{text && <p className="section-copy">{text}</p>}</div>;
}

export const provisions = [
  { icon: BriefcaseMedical, title: "Medical Supplies", text: "Dependable sourcing for everyday clinical and institutional requirements." },
  { icon: Stethoscope, title: "Medical Equipment", text: "Purpose-led equipment options for varied healthcare environments." },
  { icon: HeartHandshake, title: "Healthcare Solutions", text: "Responsive support shaped around each organisation's supply needs." },
  { icon: Boxes, title: "Institutional Supply", text: "Coordinated product support for hospitals, clinics and institutions." },
  { icon: Headphones, title: "Product Support", text: "A clear point of contact from initial enquiry through ongoing support." },
];

export const services = [
  { icon: PackageCheck, title: "Medical Supply & Distribution", text: "Placeholder service description for coordinated supply and distribution requirements." },
  { icon: Boxes, title: "Procurement Support", text: "Placeholder service description for product sourcing and procurement coordination." },
  { icon: Wrench, title: "Equipment Installation", text: "Placeholder service description for applicable equipment setup and installation." },
  { icon: Headphones, title: "Maintenance Support", text: "Placeholder service description for product guidance and ongoing assistance." },
  { icon: BriefcaseMedical, title: "Institutional Healthcare Supply", text: "Placeholder service description for hospitals, clinics and other institutions." },
  { icon: Truck, title: "Delivery & Logistics", text: "Placeholder service description for planned delivery and logistics coordination." },
];

export const strengths = [
  { title: "Quality", text: "A careful, professional approach to the products and solutions we represent." },
  { title: "Reliability", text: "Clear communication and dependable support throughout every enquiry." },
  { title: "Professional Service", text: "A corporate standard of service built for healthcare stakeholders." },
  { title: "Customer Support", text: "Responsive assistance focused on practical requirements and continuity." },
  { title: "Healthcare Focus", text: "A dedicated understanding of medical supply environments and priorities." },
  { title: "Trusted Partnerships", text: "Long-term relationships guided by transparency, respect and shared value." },
];

export function IconCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <article className="icon-card reveal"><span className="icon-box"><Icon /></span><h3>{title}</h3><p>{text}</p></article>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><div className="site-container"><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}

export function FinalCta() {
  return <section className="cta-band"><div className="site-container grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow eyebrow-light">Start a conversation</p><h2>Let’s Build Better Healthcare Together</h2><p>Contact Eastern Med Supplies for product enquiries, healthcare supply solutions and business partnerships.</p></div><Button asChild variant="light" size="lg"><Link to="/contact">Contact our team <ArrowRight /></Link></Button></div></section>;
}

export function WhyGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{strengths.slice(0, limit).map((item, index) => <article key={item.title} className="trust-card reveal" style={{ animationDelay: `${index * 70}ms` }}><span>0{index + 1}</span><ShieldCheck /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}
