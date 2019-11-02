import { Controller, Context } from 'egg';
class BaseContoller extends Controller {
  constructor(ctx: Context) {
    super(ctx);
  }
}

export default BaseContoller;
