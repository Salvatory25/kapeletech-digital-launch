import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { COURSES } from "@/data/site";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — KapeleTech Web Services" },
      { name: "description", content: "Hands-on ICT training: web development, design, programming, networking, cybersecurity and databases." },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Training"
          title={<>Learn the skills powering <span className="text-gradient">tomorrow</span></>}
          description="Practical, project-based courses taught by working professionals — for individuals, schools and organizations."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{c.duration}</span>
                <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.level}</span>
              </div>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow">
                <GraduationCap className="h-4 w-4" /> Join Training
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
