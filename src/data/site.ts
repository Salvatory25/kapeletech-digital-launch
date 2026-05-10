import {
  Code2, Smartphone, Palette, Cpu, LayoutDashboard, GraduationCap,
  Briefcase, Wrench, Megaphone, Database, Network, Shield, MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  { slug: "web", title: "Web Design & Development", short: "Fast, scalable sites & web apps.", description: "Modern marketing sites, dashboards and SaaS platforms built on React & TypeScript.", icon: Code2 },
  { slug: "mobile", title: "Mobile App Development", short: "iOS, Android & cross-platform.", description: "Performant native and React Native apps with delightful UX.", icon: Smartphone },
  { slug: "graphics", title: "Graphics Design", short: "Visual identity that converts.", description: "Logos, posters, social kits and motion graphics that stand out.", icon: Palette },
  { slug: "software", title: "Software Development", short: "Custom business systems.", description: "End-to-end software tailored to your operations and workflows.", icon: Cpu },
  { slug: "uiux", title: "UI / UX Design", short: "Research-driven product design.", description: "Beautiful, intuitive interfaces backed by usability research.", icon: LayoutDashboard },
  { slug: "training", title: "ICT Training", short: "Computerized technology training.", description: "Hands-on programs for individuals, schools and organizations.", icon: GraduationCap },
  { slug: "consulting", title: "IT Consulting", short: "Strategy that ships.", description: "Guidance on architecture, cloud, security and digital transformation.", icon: Briefcase },
  { slug: "maintenance", title: "System Maintenance", short: "Keep things running.", description: "Monitoring, updates and proactive support for your systems.", icon: Wrench },
  { slug: "branding", title: "Branding & Digital Marketing", short: "Grow your audience.", description: "Brand strategy, content, SEO and paid campaigns that perform.", icon: Megaphone },
  { slug: "database", title: "Database Management", short: "Reliable data infrastructure.", description: "Design, optimization and administration for SQL & NoSQL databases.", icon: Database },
  { slug: "network", title: "Networking Solutions", short: "Built to scale.", description: "Office and enterprise networks, Wi-Fi, VPNs and structured cabling.", icon: Network },
  { slug: "security", title: "Cyber Security Solutions", short: "Defense in depth.", description: "Audits, hardening, monitoring and incident response.", icon: Shield },
  { slug: "support", title: "Computer Repair & Tech Support", short: "Hardware & software help.", description: "Diagnostics, repairs and remote support for businesses & individuals.", icon: MonitorSmartphone },
];

export const COURSES = [
  { title: "Web Development Training", duration: "8 weeks", level: "Beginner → Intermediate", icon: Code2 },
  { title: "Graphics Design Training", duration: "6 weeks", level: "All levels", icon: Palette },
  { title: "Programming Courses", duration: "10 weeks", level: "Beginner → Advanced", icon: Cpu },
  { title: "Computer Basics", duration: "4 weeks", level: "Beginner", icon: MonitorSmartphone },
  { title: "Networking & Cybersecurity", duration: "8 weeks", level: "Intermediate", icon: Shield },
  { title: "Database Training", duration: "6 weeks", level: "Intermediate", icon: Database },
];
