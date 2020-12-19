import FindAllMoviesService from '../../services/FindAllMoviesService';
import Movies from '../../schemas/Movies';
import { movieDetails } from '../DataMock';
import MongoMock from '../MongoMockConnection';

let findAllMovies: FindAllMoviesService;

describe('Find all movies - Unity', () => {
  beforeAll(async () => {
    await MongoMock.connect();
    findAllMovies = new FindAllMoviesService();
  });

  beforeEach(async () => {
    await Movies.deleteMany({});
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  it('should be able to find all movies', async () => {
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

    const mockMovie2 = movieDetails;

    mockMovie2.id = 200;

    await Movies.create({
      adult: mockMovie2.adult,
      backdropPath: mockMovie2.backdrop_path,
      belongsToCollection: mockMovie2.belongs_to_collection,
      budget: mockMovie2.budget,
      genres: mockMovie2.genres,
      homepage: mockMovie2.homepage,
      imdbId: mockMovie2.imdb_id,
      movieId: mockMovie2.id,
      originalLanguage: mockMovie2.original_language,
      originalTitle: mockMovie2.original_title,
      overview: mockMovie2.overview,
      popularity: mockMovie2.popularity,
      posterPath: mockMovie2.poster_path,
      productionCompanies: mockMovie2.production_companies,
      productionCountries: mockMovie2.production_countries,
      releaseDate: mockMovie2.release_date,
      revenue: mockMovie2.revenue,
      runtime: mockMovie2.runtime,
      spokenLanguage: mockMovie2.spoken_languages,
      status: mockMovie2.status,
      tagline: mockMovie2.tagline,
      title: mockMovie2.title,
      video: mockMovie2.video,
      voteAverage: mockMovie2.vote_average,
      voteCount: mockMovie2.vote_count,
    });

    const movies = await findAllMovies.execute();

    expect(movies).toBeDefined();
    expect(movies.length).toBe(2);
    expect(movies[0].movieId).toBe(550);
    expect(movies[1].movieId).toBe(200);
  });

  it('should be able to return an empty array when there are no movies registred', async () => {
    const movies = await findAllMovies.execute();

    expect(movies).toBeDefined();
    expect(movies.length).toBe(0);
  });
});
