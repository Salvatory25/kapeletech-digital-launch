import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
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
          <p className="text-sm text-muted-foreground max-w-xs">
            Innovating digital solutions for the future. Building software, design and training experiences from Arusha to the world.
          </p>
          <div className="flex gap-2 pt-1">
            {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:bg-white/10 transition" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["/", "Home"], ["/about", "About"], ["/services", "Services"],
              ["/training", "Training"], ["/portfolio", "Portfolio"], ["/blog", "Blog"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-foreground transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Web Development", "Mobile Apps", "UI/UX Design", "Cyber Security", "IT Consulting", "ICT Training"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-foreground transition">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent"/> Kapeletech@gmail.com</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent"/> +255 627 274 168</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent"/> Arusha, Tanzania</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KapeleTech Web Services. All rights reserved.</p>
          <p>Crafted with care in Arusha, Tanzania.</p>
        </div>
      </div>
    </footer>
  );
}
