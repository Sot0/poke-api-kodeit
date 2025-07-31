import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemon-list',
    loadComponent: () =>
      import('./view/pages/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
  },
  {
    path: 'pokemon/:id',
    loadComponent: () =>
      import('./view/pages/pokemon-detail/pokemon-detail.component').then(m => m.PokemonDetailComponent),
  },
  {
    path: 'pokemon-of-day',
    loadComponent: () =>
      import('./view/pages/pokemon-day/pokemon-day.component').then(m => m.PokemonDayComponent),
  },
  {
    path: '**',
    redirectTo: 'pokemon-list',
  }
];
