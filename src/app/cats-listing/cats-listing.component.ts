import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CatsListingService } from './data-access/cats-listing.service';
import { SliderComponent } from '../shared/slider/slider.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { BehaviorSubject, catchError, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-cats-listing',
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    DropdownComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './cats-listing.component.html',
  styleUrls: ['./cats-listing.component.scss'],
})
export class CatsListingComponent {
  public error$ = new BehaviorSubject<any | null>(null);

  public vm$ = combineLatest([
    this.catsListing.fetchImages(),
    this.catsListing.fetchBreeds(),
  ]).pipe(
    map(([images, breeds]) => ({ images, breeds })),
    catchError(async (err) => this.error$.next(err))
  );

  constructor(private catsListing: CatsListingService) {}
}
