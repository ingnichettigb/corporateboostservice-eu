import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Megaphone, ChevronLeft, ChevronRight } from "lucide-react";
import sponsored from "@/content/sponsored.json";
import type { SponsoredItem } from "@/lib/blog";

const items = sponsored as SponsoredItem[];
const ROTATION_MS = 8000;

export function BlogSponsoredSidebar({ label = "Sponsorizzato" }: { label?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), ROTATION_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  if (items.length === 0) return null;
  const item = items[index];
  const isExternal = /^https?:\/\//.test(item.link);

  return (
    <aside
      className="lg:sticky lg:top-24 w-full lg:w-80 shrink-0"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] overflow-hidden">
        <p className="flex items-center gap-2 px-5 py-3 border-b border-primary/15 bg-primary/5 text-xs font-bold uppercase tracking-widest text-primary">
          <Megaphone className="h-4 w-4" aria-hidden /> {label}
        </p>

        <div className="p-5">
          {item.badge && (
            <span className="inline-flex items-center rounded-md border border-primary/25 bg-primary/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {item.badge}
            </span>
          )}
          {item.image && (
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="mt-4 w-full aspect-video rounded-xl object-cover border border-primary/15"
            />
          )}
          <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">{item.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-foreground/80">{item.description}</p>

          {isExternal ? (
            <a
              href={item.link}
              rel="sponsored noopener"
              target="_blank"
              className="mt-5 inline-flex items-center justify-center gap-2 min-h-11 w-full rounded-lg bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {item.title} <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          ) : (
            <Link
              to={item.link}
              rel="sponsored noopener"
              className="mt-5 inline-flex items-center justify-center gap-2 min-h-11 w-full rounded-lg bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <span className="truncate">{item.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          )}
        </div>

        {items.length > 1 && (
          <div className="flex items-center justify-between gap-2 px-5 py-3 border-t border-primary/15 bg-primary/5">
            <button
              type="button"
              aria-label="Precedente"
              onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-md border-2 border-primary/25 text-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="flex items-center gap-1.5" aria-hidden>
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-primary/25"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Successivo"
              onClick={() => setIndex((i) => (i + 1) % items.length)}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-md border-2 border-primary/25 text-primary hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
