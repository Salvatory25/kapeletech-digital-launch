import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KapeleTech Web Services" },
      { name: "description", content: "Modern technology company in Arusha delivering software, design, ICT training and digital transformation." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="About us"
          title={<>A modern technology partner <span className="text-gradient">based in Arusha</span></>}
          description="KapeleTech Web Services is a tech company focused on innovative software, graphics design, digital transformation and professional ICT training for organizations and individuals across East Africa."
        />
      </Section>

      <Section className="py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "Empower African businesses with world-class technology, design and training that unlocks growth and opportunity." },
            { icon: Eye, title: "Our Vision", text: "To be East Africa's most trusted technology partner — building products and people that shape the digital future." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8 glow-ring"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <c.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Our values"
          title={<>What drives <span className="text-gradient">our work</span></>}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Heart, title: "Craft", text: "We sweat the details — pixel-perfect, performant, accessible." },
            { icon: Users, title: "Partnership", text: "We work as an extension of your team, not a vendor." },
            { icon: Award, title: "Excellence", text: "Senior-led, quality-first delivery on every engagement." },
            { icon: Zap, title: "Velocity", text: "Pragmatic, fast iteration without sacrificing quality." },
            { icon: Target, title: "Outcome", text: "Tied to your business goals, not just shipping features." },
            { icon: Eye, title: "Transparency", text: "Honest communication, predictable timelines and pricing." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition"
            >
              <v.icon className="h-6 w-6 text-accent" />
              <h4 className="mt-3 font-semibold">{v.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
