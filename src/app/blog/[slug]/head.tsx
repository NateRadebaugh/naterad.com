import getBlogPostDetails from "lib/getBlogPostDetails";

async function getData(slug: string, locale: string) {
  const pageInfo = getBlogPostDetails({ locale });
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const post = pageInfo[postIndex] || null;
  return { title: post.title };
}

export default async function Head({
  params,
  locale,
}: {
  locale: string;
  params: { slug: string };
}) {
  const { title } = await getData(params.slug, locale);

  return (
    <>
      <title>{`${title} - Nate Radebaugh&apos;s Blog`}</title>
      <meta name="Description" content={title} />

      <meta name="theme-color" content="#317EFB" />
    </>
  );
}
