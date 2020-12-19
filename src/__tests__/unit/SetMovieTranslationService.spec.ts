import MockAdapter from 'axios-mock-adapter';
import SetMovieTranslationService from '../../services/SetMovieTranslationService';
import AppError from '../../shared/errors/AppError';
import Movies from '../../schemas/Movies';
import movieAPI from '../../shared/axios';
import { movieDetails, movieTranslations } from '../DataMock';
import MongoMock from '../MongoMockConnection';

const mock = new MockAdapter(movieAPI);

describe('Set movie translation - Unity', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  beforeEach(async () => {
    await Movies.deleteMany({});
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  it('should be able to set translation on movie', async () => {
    const movieId = 550;

    mock.onGet(`/${movieId}/translations`).reply(200, movieTranslations);

    const mockMovie1 = movieDetails;

    const movie1 = await Movies.create({
      adult: true,
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

    const setMovieTranslation = new SetMovieTranslationService();

    const movie = await setMovieTranslation.execute({
      movieId: movie1.movieId,
    });

    expect(movie).toBeDefined();
    expect(movie.movieId).toBe(movieId);
    expect(movie.translations).toBeDefined();
  });

  it('should not be able to set translation when movie doenst exist', async () => {
    const setMovieTranslation = new SetMovieTranslationService();

    await expect(
      setMovieTranslation.execute({ movieId: 10 }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to set translation when resource could not be found', async () => {
    const movieId = 550;

    mock.onGet(`/${movieId}/translation`).reply(404, {
      status_message: 'The resource you requested could not be found.',
      status_code: 34,
    });

    const setMovieTranslation = new SetMovieTranslationService();

    await expect(
      setMovieTranslation.execute({ movieId: 10 }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to set translation when API_KEY is invalid', async () => {
    const movieId = 550;

    mock.onGet(`/${movieId}`).reply(401, {
      status_message: 'Invalid API key: You must be granted a valid key.',
      success: false,
      status_code: 7,
    });

    const setMovieTranslation = new SetMovieTranslationService();

    await expect(
      setMovieTranslation.execute({ movieId: 10 }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
