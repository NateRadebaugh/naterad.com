import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-content-group",
  templateUrl: "./content-group.component.html",
  styles: [
    `
      h2.contentGroupLabel {
        @media (max-width: 799px) {
          margin-top: 0.7em;
          padding-top: 0.7em;
          font-size: 1.8em;
          margin-bottom: 0;

          border-top: 1px solid #dee2e6;

          float: none;
        }

        @media print, (min-width: 800px) {
          padding-top: 0;
          margin-bottom: 0;

          border-top: none;

          float: left;
          clear: left;

          margin-top: 10px;
          font-size: 1em;
          font-weight: bold;
          width: 1in;
        }
      }

      div.contentGroupContent {
        margin-top: 10px;
        float: left;
        clear: right;

        @media (max-width: 799px) {
          float: none;
          clear: none;
        }

        @media print, (min-width: 800px) {
          width: 7in;
          float: left;
          clear: right;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentGroupComponent {
  label = input.required<string>();
}
