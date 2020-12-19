import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import MoviesController from '../controllers/MoviesController';
import MoviesTranslationsRouter from './moviesTranslations.routes';

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

moviesRouter.put(
  '/:movieId',
  celebrate({
    [Segments.PARAMS]: { movieId: Joi.string().required().strict(true) },
  }),
  moviesController.update,
);

moviesRouter.delete(
  '/:movieId',
  celebrate({
    [Segments.PARAMS]: { movieId: Joi.string().required().strict(true) },
  }),
  moviesController.delete,
);

moviesRouter.use(
  '/:movieId/translations',
  celebrate({
    [Segments.PARAMS]: { movieId: Joi.string().required().strict(true) },
  }),
  MoviesTranslationsRouter,
);

export default moviesRouter;
