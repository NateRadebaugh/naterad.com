import matter from "gray-matter";
import { totalist } from "totalist/sync";
import fs from "fs";
import path from "path";

const root = process.cwd();

export interface BlogPostDetails {
  sourcePath: string;
  path: string;
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function getBlogPostDetails() {
  const detailsList: BlogPostDetails[] = [];

  totalist("src/_posts", (name, abs, stats) => {
    if (/\.mdx?$/.test(name)) {
      const slug = name.replace(/\.mdx?$/, "").replace(/\/index$/, "");

      const source = fs.readFileSync(
        path.join(root, "src", "_posts", name),
        "utf8",
      );

      const { data } = matter(source);

      detailsList.push({
        slug: slug,
        sourcePath: name,
        path: `/blog/${slug}`,
        title: data.title,
        date: data.date,
        description: data.description,
      });

      if (stats.size >= 100e3) {
        console.warn(
          `[WARN] "${name}" might cause performance issues (${stats.size})`,
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
    x.date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(x.date));
  });

  return detailsList;
}
