import { Dispatch, SetStateAction } from "react"

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

export interface ISearchBarProps {
  setMovies: Dispatch<SetStateAction<IMovie[] | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string>>,
  error: string
}

export interface IMovieInfoProps {
  movie: IMovie
}

export interface IErrorProps {
  text: string
}

export interface IWatchLaterProps{
  id: string,
  remove?: boolean,
  onPress?: () => void
}

export interface ILocalMovie {
  id: string
}

export interface IStarsRatingProps {
  id: string
}

export interface IMovieRatingLocal {
  id: string,
  rating: number
}