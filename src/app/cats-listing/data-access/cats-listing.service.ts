import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, take, tap } from 'rxjs';

import { ICatImage } from '../interfaces/cat-image.interface';
import { ICatBreed } from '../interfaces/cat-breed.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CatsListingService {
  private _error$ = new BehaviorSubject<HttpErrorResponse | null>(null);

  public get error$() {
    return this._error$.asObservable();
  }

  constructor(private http: HttpClient) {}

  public fetchImages(
    limit: number = 10,
    breedId?: string
  ): Observable<ICatImage[] | void> {
    let url = `${environment.API_LINK}/images/search?limit=${limit}`;

    if (breedId) url += `&breed_ids=${breedId}`;

    return this.http
      .get<ICatImage[]>(url)
      .pipe(catchError(async (err) => this._error$.next(err)));
  }

  public fetchBreeds(): Observable<ICatBreed[] | void> {
    let url = `${environment.API_LINK}/breeds`;

    return this.http
      .get<ICatBreed[]>(url)
      .pipe(catchError(async (err) => this._error$.next(err)));
  }
}
