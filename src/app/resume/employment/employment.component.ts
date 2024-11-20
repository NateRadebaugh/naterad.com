import { Component, input } from "@angular/core";

@Component({
  selector: "app-employment",
  templateUrl: "./employment.component.html",
  styles: [
    `
      div.employment {
        padding-bottom: 0.25em;
      }

      h3.companyName {
        margin: 0;
        padding: 0;
        display: inline-block;

        @media (max-width: 799px) {
          font-size: 1.3em;
          margin-top: 0.3em;
        }

        @media print, (min-width: 800px) {
          font-size: 1em;
          margin: 0;
        }
      }

      h3.position {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-style: italic;

        @media (max-width: 799px) {
          font-size: 1.3em;
          margin-bottom: 0.3em;
          margin-left: 0.6em;
        }

        @media print, (min-width: 800px) {
          font-size: 1em;
          margin: 0;
        }
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
})
export class EmploymentComponent {
  company = input.required<string>();
  location = input.required<string>();
  position = input.required<string>();
  group = input<string>();
  dates = input.required<string>();
  details = input<string[]>();
}
