// Dentro de la interface creamos colocamos dos propiedades como opcional con id?: y alt_img?:

export interface Heroe {
  id?:               string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  alt_img?:          string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
