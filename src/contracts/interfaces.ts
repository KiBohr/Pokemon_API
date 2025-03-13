export type PokemonList = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  abilities: Array<{
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }>;
  // moves: Array<{
  // 	move: {
  // 		name: string;
  // 		url: string;
  // 	};
  // }>;
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
    other: {
      dream_world: {
        front_default: string;
        front_female: any;
      };
      home: {
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: any;
        back_shiny: string;
        back_shiny_female: any;
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
    };
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
};

// - interface für die types
export interface ITypeRoot {
  count: number;
  next: string;
  previous: any;
  results: IType[];
}

export interface IType {
  name: string;
  url: string;
}

export type ITypeDetails = {
  id: number;
  name: string;
  sprites: {
    "generation-ix": {
      "scarlet-violet": {
        name_icon: string;
      };
    };
  };
};
