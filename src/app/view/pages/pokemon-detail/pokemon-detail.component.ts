import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PokeapiService } from '../../../services/repository/pokeapi.service';
import { LoaderComponent } from '../../components/loader/loader.component';
import { IPokemon } from '../../../models/interfaces/IPokeApi.interface';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  loading = signal(true);
  pokemonData: IPokemon = {
    abilities: [],
    color: '',
    description: '',
    genus: '',
    id: 0,
    imageUrl: '',
    locations: [],
    name: '',
    types: [],
  };

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _pokeApiService: PokeapiService,
  ) { }

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData(): void {
    this._pokeApiService.getPokemonById(this._route.snapshot.params['id']).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
