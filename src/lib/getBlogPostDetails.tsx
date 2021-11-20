import matter from "gray-matter";
import { totalist } from "totalist";
import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import bundleMdxConfig from "./bundleMdxConfig";

const root = process.cwd();

export interface BlogPostDetails {
  path: string;
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default async function getBlogPostDetails({ locale }) {
  const detailsList: BlogPostDetails[] = [];

  await totalist("src/_posts", async (name, abs, stats) => {
    if (/\.mdx?$/.test(name)) {
      const slug = name.replace(/\.mdx?$/, "");

      const sourceFilePath = path.join(root, "src", "_posts", `${slug}.mdx`);
      const { frontmatter: data } = await bundleMDX({
        file: sourceFilePath,
        ...bundleMdxConfig,
      });

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
