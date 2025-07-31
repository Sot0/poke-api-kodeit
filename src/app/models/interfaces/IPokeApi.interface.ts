export interface IPokemon {
  abilities: IAbility[];
  color: string;
  consultedAt?: Date; // local added
  description: string;
  genus: string;
  id: number;
  imageUrl: string;
  locations: string[];
  name: string;
  stats?: IStats;
  types: string[];
}

export interface IAbility {
  description: string;
  effect: string;
  name: string;
}

export interface IStats {
  Attack: number;
  Defense: number;
  HP: number;
  'Special Attack': number;
  'Special Defense': number;
  Speed: number;
}
