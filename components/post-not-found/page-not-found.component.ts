import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"]
})
export class PageNotFoundComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;

  constructor() {}

  ngOnInit() {
    this.headerTitle = "Page Not Found";
    this.headerIcon = "fas fa-exclamation-circle";
    this.headerDescription = "The page you are looking is not found. Error 404";
  }
}
