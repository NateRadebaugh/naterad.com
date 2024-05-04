import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./home/home.component"),
  },
  {
    path: "resume",
    loadComponent: () => import("./resume/resume.component"),
  },
];
