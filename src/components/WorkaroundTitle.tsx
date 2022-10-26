"use client";

import { useEffect, useState } from "react";

// https://beta.nextjs.org/docs/routing/pages-and-layouts#modifying-head
/*
Warning: Currently, the Head export does not re-render on client-side
transitions, only on initial render. To work around this for <title>,
you can use a client component with useEffect that updates document.title.
This will be fixed soon in a future release.
*/

export default function WorkaroundTitle({
  children: title,
}: {
  children: string;
}) {
  const [originalTitle, setOriginalTitle] = useState(
    typeof document !== "undefined" ? document.title ?? null : undefined
  );

  // Set original title once we reach the client
  useEffect(() => {
    if (originalTitle !== undefined && typeof document !== "undefined") {
      setOriginalTitle(document.title ?? null);
    }
  }, [originalTitle]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.title = title;

    return () => {
      if (typeof document === "undefined") {
        return;
      }

      document.title = originalTitle ?? "";
    };
  }, [originalTitle, title]);

  return null;
}
