import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cats-listing',
    loadComponent: () =>
      import('./cats-listing/cats-listing.component').then(
        (c) => c.CatsListingComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cats-listing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
