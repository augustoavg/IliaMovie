import { Schema, Document, model } from 'mongoose';

import {
  IGenres,
  IMovieTranslation,
  IProductionCompanies,
  IProductionCountries,
  ISpokenLanguages,
} from '../shared/dtos/Movie.dto';

export interface IMoviesInterface extends Document {
  id: string;
  movieId: number;
  adult: boolean;
  backdropPath: string | null;
  belongsToCollection: Record<string, unknown> | null;
  budget: number;
  genres: IGenres[];
  homepage: string | null;
  imdbId: string | null;
  originalLanguage: string;
  originalTitle: string;
  overview: string | null;
  popularity: number;
  posterPath: string | null;
  productionCompanies: IProductionCompanies[];
  productionCountries: IProductionCountries[];
  releaseDate: string | Date;
  revenue: number;
  runtime: number | null;
  spokenLanguage: ISpokenLanguages[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  translations?: IMovieTranslation[];
}

const MoviesSchema = new Schema(
  {
    id: {
      type: String,
    },
    movieId: {
      type: Number,
      unique: true,
    },
    adult: {
      type: Boolean,
    },
    backdropPath: {
      type: String || null,
    },
    belongsToCollection: {
      type: [String],
    },
    budget: {
      type: Number,
    },
    genres: {
      type: Object,
    },
    homepage: {
      type: String || null,
    },
    imdbId: {
      type: String || null,
    },
    originalLanguage: {
      type: String,
    },
    originalTitle: {
      type: String,
    },
    overview: {
      type: String || null,
    },
    popularity: {
      type: Number,
    },
    posterPath: {
      type: String || null,
    },
    productionCompanies: {
      type: Object,
    },
    productionCountries: {
      type: Object,
    },
    releaseDate: {
      type: Date,
    },
    revenue: {
      type: Number,
    },
    runtime: {
      type: Number || null,
    },
    spokenLanguage: {
      type: Object,
    },
    status: {
      type: String,
    },
    tagline: {
      type: String || null,
    },
    title: {
      type: String,
    },
    video: {
      type: Boolean,
    },
    voteAverage: {
      type: Number,
    },
    voteCount: {
      type: Number,
    },
    translations: {
      type: Object,
      default: undefined,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Movies = model<IMoviesInterface>('Movies', MoviesSchema, 'Movies');

export default Movies;
