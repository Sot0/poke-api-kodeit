import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from '../../../models/interfaces/IPokeApi.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemon?: IPokemon;
  urlDefaultImg = '../../../../assets/img/not-loaded-img.jpg';

  constructor(
    private readonly _router: Router,
  ) { }

  pokemonSelected(): void {
    this._router.navigateByUrl(`pokemon/${this.pokemon?.id}`);
  }
}
