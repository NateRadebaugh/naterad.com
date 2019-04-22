/// <reference path="node_modules/@types/react/index.d.ts"/>

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}
