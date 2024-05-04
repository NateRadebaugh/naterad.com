import { NgTemplateOutlet } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconComponent } from "src/app/icon/icon.component";

@Component({
  standalone: true,
  selector: "app-tile",
  template: `
    @if (to()) {
    <a [routerLink]="to()" class="tile">
      <ng-container *ngTemplateOutlet="content" />
    </a>
    } @else if (href()) {
    <a [href]="href()" target="_blank" class="tile">
      <ng-container *ngTemplateOutlet="content" />
    </a>
    } @else {
    <div class="tile">
      <ng-container *ngTemplateOutlet="content" />
    </div>
    }

    <ng-template #content>
      <app-icon [icon]="icon()" style="font-size: 6rem" />
      <span class="tileText">{{ text() }}</span>
    </ng-template>
  `,
  styles: [
    `
      .tile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 5px;
        text-align: center;
        text-decoration: none;
        word-break: break-word;
        color: #eee;
        border-radius: 8px;
        padding-top: 16px;
        padding-bottom: 16px;
      }

      @media print {
        .tile {
          color: black;
          border: 1px solid black;
        }
      }

      .tileText {
        display: block;
        font-size: 1.75em;
        text-transform: lowercase;
        line-height: 40px;
        margin: 0;
        font-family: "Segoe UI Light", "Helvetica Neue", "Segoe UI", "Segoe WP",
          sans-serif;
        font-weight: 100;
        text-rendering: optimizelegibility;
      }
    `,
  ],
  imports: [NgTemplateOutlet, RouterLink, IconComponent],
})
export class TileComponent {
  to = input<string>();
  href = input<string>();
  icon = input.required<IconDefinition>();
  text = input.required<string>();
}
