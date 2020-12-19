import AppError from '../../shared/errors/AppError';
import DeleteMovieService from '../../services/DeleteMovieService';
import Movies from '../../schemas/Movies';
import { movieDetails } from '../DataMock';
import MongoMock from '../MongoMockConnection';

describe('Delete a movie - Unity', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  beforeEach(async () => {
    await Movies.deleteMany({});
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  it('should be able to delete a movie', async () => {
    const mockMovie1 = movieDetails;

    const movie1 = await Movies.create({
      adult: mockMovie1.adult,
      backdropPath: mockMovie1.backdrop_path,
      belongsToCollection: mockMovie1.belongs_to_collection,
      budget: mockMovie1.budget,
      genres: mockMovie1.genres,
      homepage: mockMovie1.homepage,
      imdbId: mockMovie1.imdb_id,
      movieId: mockMovie1.id,
      originalLanguage: mockMovie1.original_language,
      originalTitle: mockMovie1.original_title,
      overview: mockMovie1.overview,
      popularity: mockMovie1.popularity,
      posterPath: mockMovie1.poster_path,
      productionCompanies: mockMovie1.production_companies,
      productionCountries: mockMovie1.production_countries,
      releaseDate: mockMovie1.release_date,
      revenue: mockMovie1.revenue,
      runtime: mockMovie1.runtime,
      spokenLanguage: mockMovie1.spoken_languages,
      status: mockMovie1.status,
      tagline: mockMovie1.tagline,
      title: mockMovie1.title,
      video: mockMovie1.video,
      voteAverage: mockMovie1.vote_average,
      voteCount: mockMovie1.vote_count,
    });

    const deleteMovie = new DeleteMovieService();

    await deleteMovie.execute({ movieId: movie1.movieId });

    const movie = await Movies.findOne({ movieId: movie1.movieId });

    expect(movie).toBe(null);
  });

  it('should not be able to delete when doesnt exist', async () => {
    const deleteMovie = new DeleteMovieService();

    await expect(deleteMovie.execute({ movieId: 10 })).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
