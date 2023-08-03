import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

import { CatsListingService } from './data-access/cats-listing.service';
import { CatCardComponent } from './ui/cat-card/cat-card.component';
import { FiltersComponent } from './ui/filters/filters.component';

@Component({
  selector: 'app-cats-listing',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CatCardComponent,
    FiltersComponent,
  ],
  templateUrl: './cats-listing.component.html',
  styleUrls: ['./cats-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatsListingComponent {
  public error$ = this.catsListing.error$;

  public catsImages$ = this.catsListing.fetchImages();
  public catBreeds$ = this.catsListing.fetchBreeds();

  public filtersForm: FormGroup = this.fb.nonNullable.group({
    limit: [10, Validators.required],
    breed: [''],
  });

  constructor(
    private catsListing: CatsListingService,
    private fb: FormBuilder
  ) {}

  public searchCats() {
    this.catsImages$ = this.catsListing.fetchImages(
      this.filtersForm.value.limit,
      this.filtersForm.value.breed
    );
  }
}
