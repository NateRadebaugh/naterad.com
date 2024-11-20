import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styles: [
    `
      div.education {
        padding-bottom: 0.25em;
      }

      span.educationDegrees {
        padding-left: 1.5em;
      }

      span.location {
        @media (max-width: 799px) {
          display: inline;

          &:before {
            content: ", ";
          }
        }

        @media print, (min-width: 800px) {
          float: right;

          &:before {
            content: "";
          }
        }
      }

      span.dates {
        @media (max-width: 799px) {
          display: inline;

          &:before {
            content: ", ";
          }
        }

        @media print, (min-width: 800px) {
          float: right;

          &:before {
            content: "";
          }
        }
      }

      ul.details {
        margin-left: 1.4em;
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0.6em;
        padding: 0;
        text-align: left;
        white-space: normal;
      }

      li.detail {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  degree = input.required<string>();
  major = input.required<string>();
  specialization = input<string>();
  dates = input.required<string>();
  location = input.required<string>();
  school = input.required<string>();
}
