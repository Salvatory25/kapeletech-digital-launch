import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — KapeleTech Web Services" },
      { name: "description", content: "Selected work across web, mobile, branding and software." },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "Web", "Mobile", "Branding", "Software"] as const;
type Filter = (typeof FILTERS)[number];

const PROJECTS: { title: string; tag: Exclude<Filter, "All">; desc: string; gradient: string }[] = [
  { title: "Serengeti Coffee Co.", tag: "Web", desc: "E-commerce + brand site for premium Tanzanian coffee.", gradient: "from-violet-500 to-fuchsia-500" },
  { title: "Kilimanjaro Logistics", tag: "Software", desc: "Internal fleet & dispatch management system.", gradient: "from-cyan-400 to-blue-600" },
  { title: "Arusha Academy", tag: "Mobile", desc: "Student portal mobile app with offline support.", gradient: "from-emerald-400 to-cyan-500" },
  { title: "Maasai Crafts", tag: "Branding", desc: "Visual identity, packaging and digital launch.", gradient: "from-amber-400 to-rose-500" },
  { title: "Zanzibar Stays", tag: "Web", desc: "Boutique hotel booking platform with payments.", gradient: "from-pink-500 to-violet-600" },
  { title: "MediCare TZ", tag: "Software", desc: "Clinic management with patient records & billing.", gradient: "from-sky-400 to-indigo-600" },
  { title: "TechHub Mobile", tag: "Mobile", desc: "Community app for East African developers.", gradient: "from-fuchsia-500 to-cyan-400" },
  { title: "Karibu Tours", tag: "Branding", desc: "Refreshed brand system & marketing collateral.", gradient: "from-orange-400 to-pink-500" },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = PROJECTS.filter((p) => filter === "All" || p.tag === filter);

  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Work we're <span className="text-gradient">proud of</span></>}
          description="A selection of recent projects across web, mobile, software and branding."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === f ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition"
              >
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs">{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
