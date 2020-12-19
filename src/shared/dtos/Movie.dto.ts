export interface IGenres {
  id: number;
  name: string;
}

export interface IProductionCompanies {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguages {
  iso_639_1: string;
  name: string;
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Record<string, unknown> | null;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  release_date: Date | string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{ iso_639_1: string; name: string }>;
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled';
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieTranslation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: {
    title: string;
    overview: string;
    homepage: string;
  };
}
