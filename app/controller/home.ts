import { Controller, Context } from 'egg';
export default class HomeController extends Controller {

  constructor(ctx: Context) {
    super(ctx);
  }

  public async index() {
    const { ctx } = this;
    ctx.body = 'hi,egg';
  }
}
