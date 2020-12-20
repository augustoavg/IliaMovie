import request from 'supertest';
import MockAdapter from 'axios-mock-adapter';
import Movies from '../../schemas/Movies';
import movieAPI from '../../shared/axios';
import { movieDetails } from '../DataMock';
import MongoMock from '../MongoMockConnection';
import app from '../../app';

const mock = new MockAdapter(movieAPI);

describe('Create a new movie - Integration', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  beforeEach(async () => {
    await Movies.deleteMany({});
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  it('should be able to create a new movie', async () => {
    const movieId = 550;
    mock.onGet(`/${movieId}`).reply(200, movieDetails);

    const response = await request(app).post(`/movies`).send({
      movieId,
    });

    expect(response.status).toBe(200);
    expect(response.body.movieId).toBe(movieId);
  });

  it('should not be able to create a movie that already exists', async () => {
    const mockMovie1 = movieDetails;

    await Movies.create({
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

    const response = await request(app).post(`/movies`).send({
      movieId: mockMovie1.id,
    });

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      message: "Movie's already registered.",
    });
  });

  it('should not be able to create a movies that resource could not be found', async () => {
    const movieId = 550;

    mock.onGet(`/${movieId}`).reply(404, {
      status_message: 'The resource you requested could not be found.',
      status_code: 34,
    });

    const response = await request(app).post(`/movies`).send({
      movieId,
    });

    expect(response.status).toBe(404);
    expect(response.body.message).toMatchObject({
      status_message: 'The resource you requested could not be found.',
      status_code: 34,
    });
  });

  it('should not be able to create a movie when API_KEY is invalid', async () => {
    const movieId = 550;

    mock.onGet(`/${movieId}`).reply(401, {
      status_message: 'Invalid API key: You must be granted a valid key.',
      success: false,
      status_code: 7,
    });

    const response = await request(app).post(`/movies`).send({
      movieId,
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toMatchObject({
      status_message: 'Invalid API key: You must be granted a valid key.',
      success: false,
      status_code: 7,
    });
  });

  it('should not be able to create a movie when movieId param is not a number', async () => {
    const movieId = '550';

    const response = await request(app).post(`/movies`).send({
      movieId,
    });

    expect(response.body.statusCode).toBe(400);
    expect(response.body.message).toBe('celebrate request validation failed');
    expect(response.body.validation.body.message).toBe(
      '"movieId" must be a number',
    );
  });

  it('should not be able to create a movie when movieId params is not given', async () => {
    const response = await request(app).post(`/movies`);

    expect(response.body.statusCode).toBe(400);
    expect(response.body.message).toBe('celebrate request validation failed');
    expect(response.body.validation.body.message).toBe('"movieId" is required');
  });
});
