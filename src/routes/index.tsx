import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import aboutImage from "@/assets/about-team.jpg";
import chairmanImage from "@/assets/chairman-placeholder.jpg";
import { Button } from "@/components/ui/button";
import { FinalCta, IconCard, SectionHeader, WhyGrid, provisions } from "@/components/sections";
import { ProductGrid } from "@/components/product-catalogue";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Eastern Med Supplies | Medical Supplies & Healthcare Solutions" },
    { name: "description", content: "Eastern Med Supplies provides quality medical supplies, equipment and healthcare solutions for hospitals, healthcare professionals and institutions." },
    { property: "og:title", content: "Eastern Med Supplies | Medical Supplies & Healthcare Solutions" },
    { property: "og:description", content: "Quality medical supplies and reliable healthcare solutions for institutions and professionals." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative overflow-hidden bg-secondary">
      <div className="site-container grid min-h-[calc(100svh-5.5rem)] items-center gap-10 py-12 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
        <div className="relative z-10 py-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <p className="eyebrow">Better Supplies. Healthier Tomorrow.</p>
          <h1 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[1.02] text-deep">Reliable Medical Supplies for Better Healthcare</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">Providing quality medical products and reliable healthcare solutions designed to support hospitals, healthcare professionals and institutions.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="premium" size="lg"><Link to="/products">Explore Products <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button></div>
          <div className="mt-12 grid max-w-xl gap-4 border-t border-border pt-6 sm:grid-cols-3">{["Institutional focus", "Responsive service", "Product-led support"].map((item) => <p key={item} className="flex items-center gap-2 text-xs font-semibold text-deep"><Check className="h-4 w-4 text-teal" />{item}</p>)}</div>
        </div>
        <div className="relative min-h-[31rem] overflow-hidden lg:min-h-[42rem]">
          <img src={heroImage} alt="Medical professional organising clinical supplies" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-y-0 left-0 w-28 bg-linear-to-r from-secondary to-transparent" />
          <div className="absolute bottom-8 left-7 max-w-[15rem] border-l-4 border-teal bg-background/95 p-5 shadow-premium backdrop-blur-sm motion-safe:animate-[float-gentle_5s_ease-in-out_infinite]"><p className="text-xs font-extrabold uppercase text-primary">Healthcare supply</p><p className="mt-2 text-sm font-semibold leading-6 text-deep">Focused on clarity, continuity and dependable support.</p></div>
        </div>
      </div>
    </section>

    <section className="section-pad"><div className="site-container grid items-center gap-14 lg:grid-cols-2"><div className="reveal relative"><img src={aboutImage} alt="Healthcare team reviewing medical supplies" width={1408} height={1008} loading="lazy" className="aspect-[7/5] w-full object-cover" /><div className="absolute -bottom-6 -right-4 hidden w-52 bg-deep p-6 text-primary-foreground shadow-premium sm:block"><p className="text-xs font-bold uppercase text-teal">Our focus</p><p className="mt-2 text-sm leading-6">Supporting better healthcare through dependable supply relationships.</p></div></div><div className="reveal lg:pl-8"><SectionHeader eyebrow="About Eastern Med Supplies" title="A dependable partner for healthcare supply needs" text="Eastern Med Supplies is presented as a medical supply company serving healthcare professionals and institutions. This introduction is placeholder copy designed to be replaced with the company’s verified story, markets and capabilities." /><div className="mt-8 grid gap-5 sm:grid-cols-2"><div className="border-l-2 border-teal pl-5"><h3 className="font-bold text-deep">Our Mission</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">To support healthcare delivery through responsive service and appropriate medical supply solutions.</p></div><div className="border-l-2 border-primary pl-5"><h3 className="font-bold text-deep">Our Vision</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">To be a valued supply partner known for professional, dependable relationships.</p></div></div><Button asChild variant="outline" className="mt-8"><Link to="/about">Discover our approach <ArrowRight /></Link></Button></div></div></section>

    <section className="section-pad bg-blush"><div className="site-container grid overflow-hidden bg-background shadow-premium lg:grid-cols-[.72fr_1.28fr]"><img src={chairmanImage} alt="Leadership portrait placeholder" width={1008} height={1200} loading="lazy" className="h-full min-h-[25rem] w-full object-cover" /><div className="relative p-8 sm:p-12 lg:p-16"><Quote className="h-10 w-10 text-teal" /><p className="eyebrow mt-8">Leadership</p><h2 className="section-title">Message from the Chairman</h2><blockquote className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">“This is placeholder text for the Chairman’s message. It can be replaced with an authentic note about the company’s purpose, commitment to healthcare, service philosophy and vision for the future.”</blockquote><div className="mt-9 border-t border-border pt-6"><p className="font-bold text-deep">Chairman Name — Placeholder</p><p className="mt-1 text-sm text-muted-foreground">Chairman, Eastern Med Supplies</p></div></div></div></section>

    <section className="section-pad"><div className="site-container"><SectionHeader eyebrow="Capabilities" title="What We Provide" text="An adaptable range of product and support capabilities for healthcare organisations." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{provisions.map((item) => <IconCard key={item.title} {...item} />)}</div></div></section>

    <section className="section-pad bg-muted"><div className="site-container"><SectionHeader eyebrow="Product catalogue" title="Our Products" text="Explore our range of medical products and healthcare solutions." /><ProductGrid preview /></div></section>

    <section className="section-pad"><div className="site-container"><SectionHeader eyebrow="Our difference" title="Why Choose Eastern Med Supplies?" text="Professional service principles built around healthcare needs and long-term relationships." /><div className="mt-12"><WhyGrid limit={6} /></div></div></section>

    <section className="overflow-hidden border-y border-border py-12"><p className="mb-8 text-center text-xs font-extrabold uppercase text-muted-foreground">Our Partners — placeholder logos</p><div className="partner-track hover:[animation-play-state:paused]">{[...Array(2)].flatMap((_, set) => ["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five"].map((name) => <div key={`${set}-${name}`} className="partner-logo">{name}</div>))}</div></section>
    <FinalCta />
  </>;
}
