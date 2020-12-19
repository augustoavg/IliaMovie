import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import MoviesController from '../controllers/MoviesController';

const moviesController = new MoviesController();
const moviesRouter = Router({ mergeParams: true });

moviesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: { movieId: Joi.string().required().strict(true) },
  }),
  moviesController.create,
);

moviesRouter.get('/', moviesController.findAll);

moviesRouter.get(
  '/:movieId',
  celebrate({
    [Segments.PARAMS]: { movieId: Joi.string().required().strict(true) },
  }),
  moviesController.findOne,
);

moviesRouter.delete(
  '/:movieId',
  celebrate({
    [Segments.PARAMS]: { movieId: Joi.string().required().strict(true) },
  }),
  moviesController.delete,
);

export default moviesRouter;
