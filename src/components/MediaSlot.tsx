/**
 * File: MediaSlot.tsx · Percorso: src/components/MediaSlot.tsx · Revisione: 1 · Data: 25/10/2026 · Ora: 10:10
 *
 * Slot immagine con codice MediaCode (registro: docs/GEOGRAFIA-MEDIA.md).
 * - Se esiste il file src/assets/<cartella>/<ID>.(jpg|jpeg|png|webp) mostra l'immagine con la didascalia (codice).
 * - Se il file manca mostra un riquadro tratteggiato con codice, percorso di destinazione e prompt AI.
 *   Il riquadro è visibile anche al pubblico (sito in costruzione): quando il file viene caricato
 *   nella cartella giusta, il riquadro sparisce da solo senza modificare il codice.
 */
import { MediaCode } from "@/components/MediaCode";

const images = import.meta.glob("/src/assets/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function findImage(id: string): string | undefined {
  const key = Object.keys(images).find(
    (p) => (p.split("/").pop() ?? "").replace(/\.[^.]+$/, "") === id,
  );
  return key ? images[key] : undefined;
}

export function MediaSlot({
  id,
  alt,
  prompt,
  folder,
  className = "",
}: {
  id: string;
  alt: string;
  prompt: string;
  folder: string;
  className?: string;
}) {
  const src = findImage(id);

  if (src) {
    return (
      <figure className={className}>
        <img
          src={src}
          alt={alt}
          className="w-full rounded-2xl border-2 border-primary/15 shadow-lg bg-white"
        />
        <MediaCode id={id} />
      </figure>
    );
  }

  return (
    <figure className={className} data-media-slot={id}>
      <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-white/70 p-5 text-left text-sm">
        <p className="font-bold text-primary">Immagine da inserire: {id}</p>
        <p className="mt-1 text-foreground/80">
          Salva il file come <code>{id}.jpg</code> (o .png / .webp) in <code>{folder}/</code>
        </p>
        <p className="mt-3 font-semibold">Prompt AI:</p>
        <p className="mt-1 whitespace-pre-wrap text-foreground/80">{prompt}</p>
      </div>
      <MediaCode id={id} />
    </figure>
  );
}
