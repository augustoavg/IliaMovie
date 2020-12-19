import { Router } from 'express';
import MoviesController from '../controllers/MoviesController';

const moviesController = new MoviesController();
const moviesRouter = Router({ mergeParams: true });

moviesRouter.post('/', moviesController.create);

export default moviesRouter;
