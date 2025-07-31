import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { PokeapiService } from '../../../services/repository/pokeapi.service';
import { LoaderComponent } from '../../components/loader/loader.component';
import { IPokemon } from '../../../models/interfaces/IPokeApi.interface';

@Component({
  selector: 'app-pokemon-day',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './pokemon-day.component.html',
  styleUrl: './pokemon-day.component.scss'
})
export class PokemonDayComponent implements OnInit {
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
  loading = signal(true);

  constructor(
    private readonly _pokeApiService: PokeapiService,
  ) { }

  ngOnInit(): void {
    this._pokeApiService.getPokemonOfDay(this.mostrarMensajeFeliz).then(resp => {
      this.pokemonData = resp;
      this.loading.set(false);
    }).catch(() => {
      this.loading.set(false);
    });
  }

  mostrarMensajeFeliz(): void {
    console.log(`
      /\\_/\\
      ( o.o )
      > ^ <
      Soy un gatito feliz
    `);
  }
}
