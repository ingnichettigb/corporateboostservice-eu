/**
 * Codice media univoco [PAGINA]-[NNN] per immagini, schemi e video.
 * Regola del sito: MAI su icone o pittogrammi, SEMPRE su immagini di contenuto.
 */
export function MediaCode({ id, className = "" }: { id: string; className?: string }) {
  return (
    <span
      data-media-code={id}
      className={`mt-1.5 block text-right font-mono text-[10px] uppercase tracking-wider text-muted-foreground ${className}`}
    >
      {id}
    </span>
  );
}
