import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { MatCardModule } from "@angular/material/card";

import { MovieServiceService } from "../movie-service.service";

import { Movie } from "../movie";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  moviesList: Movie[] = [];
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {
    //this.getMovies();

    this.movieService.getMovies().subscribe(result => {
      this.moviesList = result;
      console.log(this.moviesList);
    });
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(result => {
      this.moviesList = result;
      console.log(this.moviesList);
    });
  }
}
