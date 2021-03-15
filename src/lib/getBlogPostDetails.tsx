import matter from "gray-matter";
import { totalist } from "totalist/sync";
import fs from "fs";
import path from "path";

const root = process.cwd();

export interface BlogPostDetails {
  path: string;
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function getBlogPostDetails({ locale }) {
  const detailsList: BlogPostDetails[] = [];

  totalist("src/_posts", (name, abs, stats) => {
    if (/\.mdx?$/.test(name)) {
      const slug = name.replace(/\.mdx?$/, "");

      const source = fs.readFileSync(
        path.join(root, "src", "_posts", `${slug}.mdx`),
        "utf8"
      );

      const { data } = matter(source);

      detailsList.push({
        slug: slug,
        path: `/blog/${slug}`,
        title: data.title,
        date: data.date,
        description: data.description,
      });

      if (stats.size >= 100e3) {
        console.warn(
          `[WARN] "${name}" might cause performance issues (${stats.size})`
        );
      }
    }
  });

  // Sort
  detailsList.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return aDate < bDate ? 1 : -1;
  });

  // format dates
  detailsList.forEach((x) => {
    x.date = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(x.date));
  });

  return detailsList;
}
