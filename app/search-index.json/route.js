import data from "@/data/data.json";

export const dynamic = "force-static";

export function GET() {
  const searchIndex = data.articles
    .filter((article) => article.published)
    .map(({ slug, title, category }) => ({ slug, title, category }));

  return Response.json(searchIndex);
}
