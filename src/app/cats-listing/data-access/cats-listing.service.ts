import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { ICatImage } from '../interfaces/cat-image.interface';
import { ICatBreed } from '../interfaces/cat-breed.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CatsListingService {
  private _images$ = new BehaviorSubject<ICatImage[]>([]);
  private _breeds$ = new BehaviorSubject<ICatBreed[]>([]);

  public get images$() {
    return this._images$.asObservable();
  }

  public get breeds$() {
    return this._breeds$.asObservable();
  }

  constructor(private http: HttpClient) {}

  public fetchImages(
    breedId?: string,
    limit?: number
  ): Observable<ICatImage[]> {
    let url = `${environment.API_LINK}/images/search`;

    if (limit) url += `?limit=${limit}`;
    if (breedId) url += `?breed_ids=${breedId}`;

    return this.http
      .get<ICatImage[]>(url)
      .pipe(tap((images) => this._images$.next(images)));
  }

  public fetchBreeds(): Observable<ICatBreed[]> {
    let url = `${environment.API_LINK}/breeds`;

    return this.http
      .get<ICatBreed[]>(url)
      .pipe(tap((breeds) => this._breeds$.next(breeds)));
  }
}
