import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Movie } from "./movie";

@Injectable({
  providedIn: "root"
})
export class MovieServiceService {
  readonly apikey = "176ca556";
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&r=json&s=park`;

  private log(log: string) {
    console.log(log);
  }
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.api).pipe(map((res: any) => res.Search));
  }
}
