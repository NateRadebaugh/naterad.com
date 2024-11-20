import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Pipe,
  PipeTransform,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Pipe({
  name: "faIcon",
})
export class FaIconPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

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
    @if (icon()) {
    <svg
      [attr.aria-label]="ariaLabel()"
      [attr.aria-hidden]="!ariaLabel()"
      [class]="
        'svg-inline--fa ' +
        (fixedWidth() ? 'fa-fw ' : '') +
        (styleClass() || '')
      "
      [attr.viewBox]="'0 0 ' + icon()!.icon[0] + ' ' + icon()!.icon[1]"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      [innerHTML]="icon()! | faIcon"
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
  imports: [FaIconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly styleClass = input<string>();
  readonly fixedWidth = input<boolean | undefined>(true);
  readonly ariaLabel = input<string>();
  readonly icon = input<IconDefinition>();
}
