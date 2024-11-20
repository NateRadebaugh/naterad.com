import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ContentGroupComponent } from "./content-group/content-group.component";
import { EmploymentComponent } from "./employment/employment.component";
import { EducationComponent } from "./education/education.component";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styles: [
    `
      .resume {
        font-size: 14.4px;
        font-family: "Helvetica Neue", Arial;
        margin-left: auto;
        margin-right: auto;

        @media print, (min-width: 800px) {
          width: 8in;
        }

        br {
          clear: both;
        }
      }

      a.link {
        color: #f8f9fa;

        &:hover,
        &:focus {
          color: white;
        }
      }

      @media print {
        .resume {
          color: black;
        }

        a.link {
          color: #343a40;

          &:hover,
          &:focus {
            color: black;
          }
        }
      }

      div.name {
        font-size: 3em;
        font-weight: bold;
        display: inline-block;
        margin: 0;
        padding: 0;
      }

      div.contact {
        margin: 0;
        padding: 0;

        @media (max-width: 799px) {
          font-size: 1.2em;
          margin-top: 1em;
        }

        @media print, (min-width: 800px) {
          font-size: 1em;
          margin-top: 0;
          display: inline-block;
          float: right;
          text-align: right;
        }
      }
    `,
  ],
  imports: [
    RouterLink,
    ContentGroupComponent,
    EmploymentComponent,
    EducationComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {}

export default ResumeComponent;
