import getBlogPostDetails from "lib/getBlogPostDetails";

async function getData(slug: string) {
  const pageInfo = getBlogPostDetails();
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const post = pageInfo[postIndex] || null;
  return { title: post.title };
}

export default async function Head({ params }: { params: { slug: string } }) {
  const { title } = await getData(params.slug);

  return (
    <>
      <title>{`${title} - Nate Radebaugh&apos;s Blog`}</title>
      <meta name="Description" content={title} />

      <meta name="theme-color" content="#317EFB" />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons-192.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </>
  );
}
