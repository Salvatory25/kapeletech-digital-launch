import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — KapeleTech Web Services" },
      { name: "description", content: "Insights on web, design, software and the East African tech scene." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { title: "Building Faster Websites in 2026", category: "Web", date: "May 2, 2026", excerpt: "How edge rendering and modern frameworks change what's possible.", gradient: "from-violet-500 to-cyan-400" },
  { title: "A Practical Guide to UI Design Systems", category: "Design", date: "Apr 18, 2026", excerpt: "Tokens, components and governance for scalable products.", gradient: "from-fuchsia-500 to-pink-400" },
  { title: "Cyber Security Basics for Small Businesses", category: "Security", date: "Apr 4, 2026", excerpt: "The five things every team should do this quarter.", gradient: "from-cyan-400 to-blue-600" },
  { title: "Why Tanzania's Tech Scene is Heating Up", category: "Industry", date: "Mar 22, 2026", excerpt: "A look at the founders and infrastructure behind the boom.", gradient: "from-amber-400 to-rose-500" },
  { title: "From Idea to App in 30 Days", category: "Product", date: "Mar 8, 2026", excerpt: "How we ran a focused MVP sprint with a logistics startup.", gradient: "from-emerald-400 to-cyan-500" },
  { title: "Hiring Your First Developer", category: "Business", date: "Feb 19, 2026", excerpt: "What to look for, what to avoid, and how to onboard well.", gradient: "from-indigo-500 to-pink-500" },
];

function BlogPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Blog & news"
          title={<>Insights from the <span className="text-gradient">KapeleTech team</span></>}
          description="Tutorials, opinions and stories from the front lines of building software in East Africa."
        />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <span className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs">{p.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {p.date}
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}
