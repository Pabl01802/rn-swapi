export interface IMovie {
  characters: string[],
  created: string,
  director: string,
  edited: string,
  episode_id: number,
  opening_crawl: string,
  planets: string[],
  producer: string,
  release_date: string,
  species: string[],
  starships: string[],
  title: string,
  url: string,
  vehicles: string[]
}

export interface IMoviesListProps {
  films: IMovie[]
}

export interface IMovieTileProps {
  film: IMovie,
  id: number
}