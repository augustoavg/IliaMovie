import Movies from '../schemas/Movies';
import AppError from '../shared/errors/AppError';

interface IRequestDTO {
  movieId: number;
}

class DeleteMoviesService {
  public async execute({ movieId }: IRequestDTO): Promise<void> {
    const movie = await Movies.findOne({ movieId });

    if (!movie) {
      throw new AppError('Movie doesnt exist.');
    }

    await Movies.findOneAndDelete({ movieId });
  }
}

export default DeleteMoviesService;
