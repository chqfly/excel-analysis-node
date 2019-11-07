import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/home', controller.home.index);
  router.resources('phenomenon', '/api/phenomenon', controller.phenomenon);
  router.resources('reason', '/api/reason', controller.reason);
  router.resources('solution', '/api/solution', controller.solution);
  router.resources('fault', '/api/fault', controller.fault);
};
