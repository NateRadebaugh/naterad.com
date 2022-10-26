"use client";

import { useEffect, useState } from "react";

// https://beta.nextjs.org/docs/routing/pages-and-layouts#modifying-head
/*
Warning: Currently, the Head export does not re-render on client-side
transitions, only on initial render. To work around this for <title>,
you can use a client component with useEffect that updates document.title.
This will be fixed soon in a future release.
*/

export default function WorkaroundTitle({ children: title }: { children: string }) {
  const [originalTitle, _] = useState(document.title);
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = originalTitle;
    };
  }, [originalTitle, title]);

  return <title>{title}</title>;
}
