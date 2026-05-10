import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Rocket, Star, Quote } from "lucide-react";
import heroGlow from "@/assets/hero-glow.jpg";
import { Section, SectionHeader } from "@/components/site/Section";
import { SERVICES } from "@/data/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KapeleTech Web Services — Innovating Digital Solutions" },
      { name: "description", content: "Premium web, mobile, design, software and ICT training from Arusha, Tanzania." },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "8+", label: "Years of Experience" },
  { value: "20+", label: "Team Members" },
];

const TESTIMONIALS = [
  { name: "Asha M.", role: "Founder, Serengeti Co.", quote: "KapeleTech transformed our online presence. Conversions doubled in three months." },
  { name: "John K.", role: "CTO, Kilimanjaro Logistics", quote: "Reliable, fast and deeply technical. They feel like an in-house team." },
  { name: "Neema R.", role: "Director, Arusha Academy", quote: "Their ICT training program upskilled our entire staff. Highly recommended." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{ backgroundImage: `url(${heroGlow})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-hero" />
        <div className="absolute inset-0 -z-10 grid-bg" />

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Innovating Digital Solutions for the Future
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              Transforming Ideas Into <span className="text-gradient">Powerful Digital Solutions</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
              KapeleTech Web Services builds modern websites, mobile apps, software, and ICT training experiences that move businesses forward — from Arusha to the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                Get Started
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Floating cards */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Rocket, title: "Ship faster", desc: "Production-ready, performant builds." },
              { icon: ShieldCheck, title: "Built secure", desc: "Hardened by default, audited often." },
              { icon: Star, title: "Crafted with care", desc: "Pixel-perfect, accessible interfaces." },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-5 glow-ring"
              >
                <c.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="py-14 sm:py-16">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title={<>End-to-end digital <span className="text-gradient">capabilities</span></>}
          description="From idea to launch and beyond — software, design, training and security under one roof."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group glass rounded-2xl p-6 hover:bg-white/5 transition relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-medium hover:bg-white/10">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Loved by teams across <span className="text-gradient">East Africa</span></>}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-4 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Have an idea? <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Tell us about your project and we'll get back within one business day.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold hover:bg-white/10">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
