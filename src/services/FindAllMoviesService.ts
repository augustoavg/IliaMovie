import Movies, { IMoviesInterface } from '../schemas/Movies';

class FindAllMoviesService {
  public async execute(): Promise<IMoviesInterface[]> {
    const movies = await Movies.find();

    return movies;
  }
}

export default FindAllMoviesService;
