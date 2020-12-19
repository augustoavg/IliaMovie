import { AxiosResponse } from 'axios';
import { IMovieTranslation } from '../shared/dtos/Movie.dto';
import movieAPI from '../shared/axios';
import AppError from '../shared/errors/AppError';
import Movies, { IMoviesInterface } from '../schemas/Movies';

interface IMovieTranslationResponse {
  id?: number;
  translations: IMovieTranslation[];
}

interface IRequestDTO {
  movieId: number;
}

class SetMovieTranslationService {
  public async execute({ movieId }: IRequestDTO): Promise<IMoviesInterface> {
    const movie = await Movies.findOne({ movieId });

    if (!movie) {
      throw new AppError('Movie doesnt exist.');
    }

    let response: AxiosResponse<IMovieTranslationResponse>;

    try {
      response = await movieAPI.get(`/${movie.movieId}/translations`);
    } catch (error) {
      throw new AppError(error.response.data, error.response.status);
    }

    const { data } = response;

    movie.translations = data.translations;

    movie.save();

    return movie;
  }
}

export default SetMovieTranslationService;
