// Copied and stripped from https://github.com/reach/reach-ui/blob/develop/packages/skip-nav/src/index.tsx
import * as React from "react";

export function SkipNavLink() {
  return (
    <a href="#skip-nav" data-skip-nav-link="">
      Skip to content
    </a>
  );
}

export function SkipNavContent() {
  return <div id="skip-nav" data-skip-nav-content=""></div>;
}
