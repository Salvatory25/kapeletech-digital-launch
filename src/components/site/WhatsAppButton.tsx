import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "255627274168";
  const text = encodeURIComponent("Hello KapeleTech! I'd like to learn more about your services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.18_150)] px-4 py-3 text-sm font-medium text-white shadow-glow hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
