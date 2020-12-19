import Movies, { IMoviesInterface } from '../schemas/Movies';
import AppError from '../shared/errors/AppError';

interface IRequestDTO {
  movieId: string;
}

class FindOneMoviesService {
  public async execute({ movieId }: IRequestDTO): Promise<IMoviesInterface> {
    const movie = await Movies.findOne({ movieId });

    if (!movie) {
      throw new AppError('Movie doesnt exist.');
    }

    return movie;
  }
}

export default FindOneMoviesService;
