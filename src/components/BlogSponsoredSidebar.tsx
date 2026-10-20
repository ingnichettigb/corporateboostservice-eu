import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Megaphone } from "lucide-react";
import sponsored from "@/content/sponsored.json";
import type { SponsoredItem } from "@/lib/blog";

const baseItems = sponsored as SponsoredItem[];
const ROTATION_MS = 5000;
const MAX_CARDS = 300;


/** Alterna 1 a 1 le carte del sito con le pubblicità extra, senza duplicati. */
function mix(base: SponsoredItem[], extra: SponsoredItem[]) {
  const seen = new Set<string>();
  const out: SponsoredItem[] = [];
  const push = (it?: SponsoredItem) => {
    if (!it) return;
    const k = it.link + "|" + it.title;
    if (seen.has(k)) return;
    seen.add(k);
    out.push(it);
  };
  for (let i = 0; i < Math.max(base.length, extra.length); i++) {
    push(base[i]);
    push(extra[i]);
  }
  return out;
}

export function BlogSponsoredSidebar({
  label = "Sponsorizzato",
  extra = [],
}: {
  label?: string;
  extra?: SponsoredItem[];
}) {
  const items = mix(baseItems, extra);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  /** Ripete la sequenza fino a riempire l'altezza della colonna di contenuto. */
  const [count, setCount] = useState(items.length);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = window.setInterval(() => setOffset((o) => (o + 1) % items.length), ROTATION_MS);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  /** Misura l'altezza della colonna di contenuto affiancata e ripete le carte finché non la riempie. */
  useEffect(() => {
    const el = asideRef.current;
    if (!el || !el.parentElement) return;
    const measure = () => {
      const parent = el.parentElement;
      if (!parent) return;
      // Target: la colonna di contenuto (articolo o griglia), mai l'aside stesso,
      // per evitare un circuito di feedback in cui l'aside allunga il contenitore.
      let target = 0;
      for (const sib of Array.from(parent.children)) {
        if (sib === el) continue;
        target = Math.max(target, sib.getBoundingClientRect().height);
      }
      if (target <= 0 || count <= 0) return;
      const pitch = el.scrollHeight / count;
      if (pitch <= 0) return;
      const need = Math.min(MAX_CARDS, Math.max(items.length, Math.ceil(target / pitch)));
      if (need !== count) setCount(need);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [count, items, items.length]);

  if (items.length === 0) return null;

  const ordered = items.map((_, i) => items[(i + offset) % items.length]);
  const sequence: { item: SponsoredItem; key: string }[] = [];
  for (let i = 0; i < count; i++) {
    const item = ordered[i % ordered.length];
    sequence.push({ item, key: `${i}-${item.link}|${item.title}` });
  }

  return (
    <aside
      ref={asideRef}
      className="w-full lg:w-80 shrink-0"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p className="flex items-center gap-2 mb-4 rounded-xl border-2 border-primary/20 bg-primary/5 px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary">
        <Megaphone className="h-4 w-4" aria-hidden /> {label}
      </p>

      <div className="flex flex-col gap-4">
        {sequence.map(({ item, key }) => {
          const isExternal = /^https?:\/\//.test(item.link);
          const cta = (
            <>
              <span className="truncate">{item.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </>
          );
          const ctaClass =
            "mt-4 inline-flex items-center justify-center gap-2 min-h-11 w-full rounded-lg bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90";

          return (
            <div
              key={key}
              className="rounded-2xl border-2 border-primary/20 bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-500"
            >
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
              <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                {item.description}
              </p>

              {isExternal ? (
                <a
                  href={item.link}
                  rel="sponsored noopener"
                  target="_blank"
                  className={ctaClass}
                >
                  {cta}
                </a>
              ) : (
                <Link
                  to={item.link as "/applicazioni"}
                  rel="sponsored noopener"
                  className={ctaClass}
                >
                  {cta}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
