import { Component, Input } from "@angular/core";

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Pipe({
  standalone: true,
  name: "faIcon",
})
export class FaIconPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(def: IconDefinition) {
    if (typeof def === "string") {
      return "";
    }

    const { icon } = def;
    const [width, height, ligatures, unicode, svgPathData] = icon;

    let content = "";
    if (Array.isArray(svgPathData)) {
      content = `<g>${svgPathData.map((x) => `<path d="${x}" />`)}</g>`;
    } else {
      content = `<path fill="currentColor" d="${svgPathData}" />`;
    }

    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

@Component({
    selector: "app-icon",
    template: `
    @if (icon) {
    <svg
      [attr.aria-label]="ariaLabel"
      [attr.aria-hidden]="!ariaLabel"
      [class]="
        'svg-inline--fa ' + (fixedWidth ? 'fa-fw ' : '') + (styleClass || '')
      "
      [attr.viewBox]="'0 0 ' + icon.icon[0] + ' ' + icon.icon[1]"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      [innerHTML]="icon | faIcon"
    ></svg>
    }
  `,
    styles: `
    :host {
      display: inline;
    }

    svg:not(:root).svg-inline--fa,
    svg:not(:host).svg-inline--fa {
      overflow: visible;
      box-sizing: content-box;
    }

    .svg-inline--fa.fa-fw {
      width: var(--fa-fw-width, 1.25em);
    }

    .fa-fw {
      text-align: center;
      width: 1.25em;
    }

    .svg-inline--fa {
      display: var(--fa-display, inline-block);
      height: 1em;
      overflow: visible;
      vertical-align: -0.125em;
    }
  `,
    imports: [FaIconPipe]
})
export class IconComponent {
  @Input() styleClass: string | undefined;
  @Input() fixedWidth: boolean | undefined = true;
  @Input() ariaLabel: string | undefined;
  @Input() icon: IconDefinition | undefined;
}
