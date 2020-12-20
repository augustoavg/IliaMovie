import findMovieDetails from '../shared/themoviedb/findMovieDetails';
import AppError from '../shared/errors/AppError';
import Movies, { IMoviesInterface } from '../schemas/Movies';

interface IRequestDTO {
  movieId: number;
}

class CreateMovieService {
  public async execute({ movieId }: IRequestDTO): Promise<IMoviesInterface> {
    const findMovie = await Movies.findOne({ movieId });

    if (findMovie) {
      throw new AppError("Movie's already registered.");
    }

    const movieData = await findMovieDetails({ movieId });

    const movie = await Movies.create({
      adult: movieData.adult,
      backdropPath: movieData.backdropPath,
      belongsToCollection: movieData.belongsToCollection,
      budget: movieData.budget,
      genres: movieData.genres,
      homepage: movieData.homepage,
      imdbId: movieData.imdbId,
      movieId: movieData.movieId,
      originalLanguage: movieData.originalLanguage,
      originalTitle: movieData.originalTitle,
      overview: movieData.overview,
      popularity: movieData.popularity,
      posterPath: movieData.posterPath,
      productionCompanies: movieData.productionCompanies,
      productionCountries: movieData.productionCountries,
      releaseDate: movieData.releaseDate,
      revenue: movieData.revenue,
      runtime: movieData.runtime,
      spokenLanguage: movieData.spokenLanguage,
      status: movieData.status,
      tagline: movieData.tagline,
      title: movieData.title,
      video: movieData.video,
      voteAverage: movieData.voteAverage,
      voteCount: movieData.voteCount,
    });

    return movie;
  }
}

export default CreateMovieService;
