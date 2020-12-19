import AppError from '../shared/errors/AppError';
import findMovieDetails from '../shared/themoviedb/findMovieDetails';
import Movies, { IMoviesInterface } from '../schemas/Movies';

interface IRequestDTO {
  movieId: number;
}

class UpdateMovieService {
  public async execute({ movieId }: IRequestDTO): Promise<IMoviesInterface> {
    let movie = await Movies.findOne({ movieId });

    if (!movie) {
      throw new AppError('Movie doesnt exist.');
    }

    const movieData = await findMovieDetails({ movieId: movie.movieId });

    movie = Object.assign(movie, movieData);

    await movie.save();

    return movie;
  }
}

export default UpdateMovieService;
