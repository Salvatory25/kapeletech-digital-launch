import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — KapeleTech Web Services" },
      { name: "description", content: "Web, mobile, software, design, training, networking, cyber security and more." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient">build & grow</span></>}
          description="Thirteen capabilities across software, design, infrastructure and education."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group glass rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-accent">{s.short}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium hover:text-accent transition">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
