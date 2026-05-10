import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Languages } from "lucide-react";

export type Lang = "en" | "sw";

type Dict = Record<string, { en: string; sw: string }>;

const DICT: Dict = {
  "nav.home": { en: "Home", sw: "Mwanzo" },
  "nav.about": { en: "About", sw: "Kuhusu" },
  "nav.services": { en: "Services", sw: "Huduma" },
  "nav.training": { en: "Training", sw: "Mafunzo" },
  "nav.portfolio": { en: "Portfolio", sw: "Kazi Zetu" },
  "nav.blog": { en: "Blog", sw: "Blogu" },
  "nav.contact": { en: "Contact", sw: "Wasiliana" },
  "cta.getStarted": { en: "Get Started", sw: "Anza Sasa" },
  "cta.exploreServices": { en: "Explore Services", sw: "Angalia Huduma" },
  "cta.contactUs": { en: "Contact Us", sw: "Wasiliana Nasi" },
  "cta.seeOurWork": { en: "See our work", sw: "Tazama Kazi Zetu" },
  "cta.viewAllServices": { en: "View all services", sw: "Tazama huduma zote" },
  "hero.badge": { en: "Innovating Digital Solutions for the Future", sw: "Tunabuni Suluhu za Kidijitali kwa Wakati Ujao" },
  "hero.title1": { en: "Transforming Ideas Into ", sw: "Tunageuza Mawazo Kuwa " },
  "hero.title2": { en: "Powerful Digital Solutions", sw: "Suluhu Imara za Kidijitali" },
  "hero.desc": {
    en: "KapeleTech Web Services builds modern websites, mobile apps, software, and ICT training experiences that move businesses forward — from Arusha to the world.",
    sw: "KapeleTech Web Services inatengeneza tovuti za kisasa, programu za simu, programu maalum, na mafunzo ya TEHAMA yanayosukuma biashara mbele — kutoka Arusha hadi dunia nzima.",
  },
  "footer.tagline": {
    en: "Innovating digital solutions for the future. Building software, design and training experiences from Arusha to the world.",
    sw: "Tunabuni suluhu za kidijitali kwa wakati ujao. Tunatengeneza programu, ubunifu na mafunzo kutoka Arusha hadi dunia nzima.",
  },
  "footer.quickLinks": { en: "Quick Links", sw: "Viungo vya Haraka" },
  "footer.services": { en: "Services", sw: "Huduma" },
  "footer.getInTouch": { en: "Get in touch", sw: "Wasiliana nasi" },
  "footer.rights": { en: "All rights reserved.", sw: "Haki zote zimehifadhiwa." },
  "footer.crafted": { en: "Crafted with care in Arusha, Tanzania.", sw: "Imetengenezwa kwa ustadi Arusha, Tanzania." },
  "lang.toggle": { en: "Swahili", sw: "English" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof DICT) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "sw") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof DICT) => DICT[k]?.[lang] ?? k;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "sw" : "en")}
      className={`inline-flex items-center gap-1.5 rounded-xl glass px-3 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-white/10 transition ${className}`}
      aria-label="Toggle language"
      title={lang === "en" ? "Badilisha kwa Kiswahili" : "Switch to English"}
    >
      <Languages className="h-3.5 w-3.5 text-accent" />
      {lang === "en" ? "EN | SW" : "SW | EN"}
    </button>
  );
}
