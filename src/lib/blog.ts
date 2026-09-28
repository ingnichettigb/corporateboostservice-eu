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

export interface BlogTranslation {
  title: string;
  excerpt: string;
  readingTime?: string;
  content: BlogBlock[];
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
