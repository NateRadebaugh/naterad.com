import { Component } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { TileComponent } from "./tile/tile.component";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [
    `
      .wrapper {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", "Segoe WP", "Helvetica Neue", sans-serif;
        font-size: 14px;
        line-height: 25px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .headerRow {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      .title {
        font-size: 56px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-bottom: 10px;
        line-height: 40px;
        margin: 12.5px 0;
        font-family: "Segoe UI Light", "Helvetica Neue", "Segoe UI", "Segoe WP",
          sans-serif;
        font-weight: 100;
        color: inherit;
        text-rendering: optimizelegibility;
      }

      .subTitle {
        font-size: 28px;
        margin: 0;
        text-transform: lowercase;
        line-height: 40px;
        font-family: "Segoe UI Light", "Helvetica Neue", "Segoe UI", "Segoe WP",
          sans-serif;
        font-weight: 100;
        color: inherit;
        text-rendering: optimizelegibility;
      }

      .introText {
        margin: 0 0 12.5px;
      }

        .tile {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          word-break: break-word;
          color: #eee;
          border-radius: 8px;
        }

      @media print {
        .tile {
          color: black;
          border: 1px solid black;
        }
      }

      @mixin tileColors($color) {
        background-color: $color;

        transition: all;
        transition-duration: 160ms;

        &:hover,
        &:focus {
          background-color: darken($color, 3%);
        }
      }

      @mixin tile($color) {
        @extend .tile;
        @include tileColors(darken($color, 8%));
      }

      .resumeTile {
        @include tile(#e15227);
      }

      .linkedinTile {
        @include tile(#0e76a8);
      }

      .githubTile {
        @include tile(#4183c4);
      }
    `,
  ],
  imports: [TileComponent],
})
export class HomeComponent {
  faFileAlt = faFileAlt;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}

export default HomeComponent;
