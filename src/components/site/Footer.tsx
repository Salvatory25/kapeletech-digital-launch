import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">
              Kapele<span className="text-gradient">Tech</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          <div className="flex gap-2 pt-1">
            {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:bg-white/10 transition" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {([
              ["/", "nav.home"], ["/about", "nav.about"], ["/services", "nav.services"],
              ["/training", "nav.training"], ["/portfolio", "nav.portfolio"], ["/blog", "nav.blog"], ["/contact", "nav.contact"],
            ] as const).map(([to, key]) => (
              <li key={to}><Link to={to} className="hover:text-foreground transition">{t(key)}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Web Development", "Mobile Apps", "UI/UX Design", "Cyber Security", "IT Consulting", "ICT Training"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-foreground transition">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">{t("footer.getInTouch")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent"/><span>Kapeletech@gmail.com</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent"/><span>+255 627 274 168</span></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent"/><span>Arusha, Tanzania</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KapeleTech Web Services. {t("footer.rights")}</p>
          <p>{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
