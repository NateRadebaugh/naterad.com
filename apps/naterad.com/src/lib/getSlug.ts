function getSlug(resourcePath: string) {
  {
    const matches = resourcePath.match(/([^\\/]+)[\\/]+index\.mdx$/);
    if (matches) {
      const slug = matches[1];

      return slug;
    }
  }

  {
    const matches = resourcePath.match(/([^\\/]+)\.mdx$/);
    if (matches) {
      const slug = matches[1];

      return slug;
    }
  }
}

export default getSlug;
