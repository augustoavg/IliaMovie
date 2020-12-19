import { Request, Response } from 'express';
import SetMovieTranslationService from '../services/SetMovieTranslationService';

class MoviesTranslationsController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { movieId } = request.params;

    const id = parseInt(movieId, 10);

    const setMovieTranslation = new SetMovieTranslationService();

    const movie = await setMovieTranslation.execute({ movieId: id });

    return response.json(movie);
  }
}

export default MoviesTranslationsController;
