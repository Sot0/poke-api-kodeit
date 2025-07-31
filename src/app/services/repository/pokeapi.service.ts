import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { IPokemon } from '../../models/interfaces/IPokeApi.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  // private pokemonDataSubject = new BehaviorSubject<IPokemon[]>([]);
  // public readonly pokemonData$: Observable<IPokemon[]> = this.pokemonDataSubject.asObservable();

  constructor(
    private _apiService: ApiService
  ) { }

  // setPokemonDataSubject(data: IPokemon[]): void {
  //   console.log(data);
  //   this.pokemonDataSubject.next(data);
  // }

  getPokemonAll(): Observable<IPokemon[]> {
    return this._apiService.getGeneric<IPokemon[]>('/pokemon');
  }

  getPokemonById(id: number): Observable<IPokemon> {
    return this._apiService.getGeneric<IPokemon>(`/pokemon/${id}`).pipe(
      map(data => ({ ...data, consultedAt: new Date() }))
    )
  }

  async getPokemonOfDay(showSuccessMessage?: () => void): Promise<IPokemon> {
    try {
      const response = await firstValueFrom(this._apiService.getGeneric<IPokemon>(`/pokemon/potd`).pipe(
        tap(() => {
          if (showSuccessMessage) {
            showSuccessMessage();
          }
        })
      ));
      return response;
    } catch (error: any) {
      throw new Error(`Ha ocurrido un error: ${error?.message || 'Error desconocido'}`);
    }
  }
}
