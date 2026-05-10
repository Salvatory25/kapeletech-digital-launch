import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("relative mx-auto max-w-7xl px-4 py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, center = true }: { eyebrow?: string; title: ReactNode; description?: ReactNode; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-2xl", center && "mx-auto text-center")}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
