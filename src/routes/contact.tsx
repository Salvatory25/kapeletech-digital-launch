import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KapeleTech Web Services" },
      { name: "description", content: "Get in touch with KapeleTech in Arusha, Tanzania. Email, phone, map and contact form." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you within 1 business day.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's start <span className="text-gradient">a conversation</span></>}
          description="Tell us about your project, training need, or how we can help."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "Kapeletech@gmail.com", href: "mailto:Kapeletech@gmail.com" },
            { icon: Phone, label: "Phone", value: "+255 627 274 168", href: "tel:+255627274168" },
            { icon: MapPin, label: "Location", value: "Arusha, Tanzania", href: "#map" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition flex items-start gap-4"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-semibold">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <form onSubmit={submit} className="glass-strong rounded-3xl p-6 sm:p-8 lg:col-span-3 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Project inquiry" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                required name="message" rows={5} placeholder="Tell us about your project..."
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send message"}
            </button>
          </form>

          <div id="map" className="lg:col-span-2 rounded-3xl overflow-hidden glass-strong min-h-[360px]">
            <iframe
              title="KapeleTech location — Arusha, Tanzania"
              src="https://www.google.com/maps?q=Arusha,Tanzania&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[360px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        required name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
