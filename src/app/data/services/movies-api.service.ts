import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IMovie,
  IMovieDataCreate,
  IMovieDataUpdate,
} from '../interfaces/movies-api.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private base_url_api_iptteam: string = environment.base_url_api_peliculas;

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<IMovie[]> {
    const url = `${this.base_url_api_iptteam}/movies`;

    return this.http.get<IMovie[]>(url);
  }

  public getMovieById(movieId: string): Observable<IMovie> {
    const url = `${this.base_url_api_iptteam}/movies/${movieId}`;

    return this.http.get<IMovie>(url);
  }

  public createMovie(data: IMovieDataCreate): Observable<IMovie> {
    const url = `${this.base_url_api_iptteam}/movies`;

    return this.http.post<IMovie>(url, data);
  }

  public updateMovie(data: IMovieDataUpdate): Observable<any> {
    const url = `${this.base_url_api_iptteam}/movies/${data.id}`;

    return this.http.put<any>(url, data);
  }

  public deleteMovieById(movieId: string): Observable<any> {
    const url = `${this.base_url_api_iptteam}/movies/${movieId}`;

    return this.http.delete<any>(url);
  }
}
