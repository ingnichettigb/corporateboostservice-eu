// Blog: ogni articolo vive in una cartella autonoma numerata a 3 cifre
// src/content/blog/001-slug/{article.json, copertina.*, figura-*.*}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; caption?: string }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; link: string };

export interface BlogFigure {
  id?: string;
  src: string;
  caption?: string;
}

export interface BlogTranslation {
  title: string;
  excerpt: string;
  readingTime?: string;
  /** Argomenti (tag) dell'articolo nella lingua corrente. */
  topics?: string[];
  /** Formato a blocchi strutturati. */
  content?: BlogBlock[];
  /** Formato Markdown generato dal programma esterno. */
  markdown?: string;
  /** Didascalie delle figure citate nel Markdown. */
  figures?: BlogFigure[];
}

/** Converte il Markdown dell'articolo in blocchi renderizzabili. */
export function markdownToBlocks(markdown: string, figures: BlogFigure[] = []): BlogBlock[] {
  const captionOf = (src: string) => figures.find((f) => f.src === src)?.caption;
  const blocks: BlogBlock[] = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let list: string[] = [];
  let para: string[] = [];

  const flushList = () => {
    if (list.length) blocks.push({ type: "list", items: list });
    list = [];
  };
  const flushPara = () => {
    if (para.length) blocks.push({ type: "paragraph", text: para.join(" ") });
    para = [];
  };
  const flush = () => {
    flushList();
    flushPara();
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    const cta = line.match(/^\[cta:([^\]]+)\](.+)\[\/cta\]$/);
    if (cta) {
      flush();
      blocks.push({ type: "cta", link: cta[1], text: cta[2] });
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (img) {
      flush();
      const src = img[2].split("/").pop() ?? img[2];
      blocks.push({ type: "image", src, caption: captionOf(src) ?? img[1] || undefined });
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      blocks.push({ type: "heading3", text: line.slice(4).trim() });
      continue;
    }
    if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "heading2", text: line.slice(3).trim() });
      continue;
    }
    if (line.startsWith("# ")) {
      flush();
      blocks.push({ type: "heading2", text: line.slice(2).trim() });
      continue;
    }
    if (line.startsWith("> ")) {
      flush();
      blocks.push({ type: "quote", text: line.slice(2).trim() });
      continue;
    }
    if (/^([-*+]|\d+\.)\s+/.test(line)) {
      flushPara();
      list.push(line.replace(/^([-*+]|\d+\.)\s+/, ""));
      continue;
    }
    flushList();
    para.push(line);
  }
  flush();
  return blocks;
}

/** Blocchi dell'articolo, indipendentemente dal formato di origine (blocchi o Markdown). */
export function articleBlocks(tr: BlogTranslation): BlogBlock[] {
  if (tr.content?.length) return tr.content;
  if (tr.markdown) return markdownToBlocks(tr.markdown, tr.figures);
  return [];
}


export interface BlogArticleFile {
  number: string;
  slug: string;
  date: string;
  author?: string;
  cover?: string;
  coverAlt?: string;
  translations: Partial<Record<string, BlogTranslation>>;
}

export interface BlogArticle extends BlogArticleFile {
  folder: string;
  coverUrl?: string;
  /** Risolve il nome file di un'immagine nella cartella dell'articolo. */
  asset: (fileName: string) => string | undefined;
}

const articleModules = import.meta.glob<BlogArticleFile>("../content/blog/*/article.json", {
  eager: true,
  import: "default",
});

const imageModules = import.meta.glob<string>("../content/blog/*/*.{webp,jpg,jpeg,png,avif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

function folderOf(key: string) {
  const m = key.match(/blog\/([^/]+)\//);
  return m ? m[1] : "";
}

const imagesByFolder = new Map<string, Record<string, string>>();
for (const [key, url] of Object.entries(imageModules)) {
  const folder = folderOf(key);
  const file = key.split("/").pop() ?? "";
  const bucket = imagesByFolder.get(folder) ?? {};
  bucket[file] = url;
  imagesByFolder.set(folder, bucket);
}

export const articles: BlogArticle[] = Object.entries(articleModules)
  .map(([key, data]) => {
    const folder = folderOf(key);
    const images = imagesByFolder.get(folder) ?? {};
    return {
      ...data,
      folder,
      slug: data.slug || folder,
      coverUrl: data.cover ? images[data.cover] : undefined,
      asset: (fileName: string) => images[fileName],
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.number.localeCompare(a.number)));

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Traduzione nella lingua richiesta, con fallback: lingua → en → it → prima disponibile. */
export function pickTranslation(article: BlogArticleFile, lang: string): BlogTranslation {
  const t = article.translations;
  return (
    t[lang] ??
    t[lang.split("-")[0]] ??
    t.en ??
    t.it ??
    (Object.values(t).find(Boolean) as BlogTranslation)
  );
}

/** Argomenti presenti in almeno un articolo, con il numero di articoli, ordinati per frequenza. */
export function collectTopics(lang: string): { topic: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const a of articles) {
    const topics = pickTranslation(a, lang)?.topics ?? [];
    for (const raw of topics) {
      const topic = raw.trim();
      if (!topic) continue;
      counts.set(topic, (counts.get(topic) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count || a.topic.localeCompare(b.topic));
}

export function formatDate(date: string, lang: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang || "it", { day: "numeric", month: "long", year: "numeric" });
}

export interface SponsoredItem {
  title: string;
  description: string;
  badge?: string;
  link: string;
  image?: string;
}
