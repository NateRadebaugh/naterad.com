export default async function Head({ params }: { params: { slug: string } }) {
  const title = params.slug;

  return (
    <>
      <title>{title} - Nate Radebaugh&apos;s Blog</title>
      <meta name="Description" content={title} />

      <meta name="theme-color" content="#317EFB" />
    </>
  );
}
