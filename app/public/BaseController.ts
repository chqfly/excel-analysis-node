import { Controller, Context } from 'egg';
class BaseContoller extends Controller {
  constructor(ctx: Context) {
    super(ctx);
  }

  public success(data: any) {
    this.ctx.body = {
      data,
      code: 0,
      message: '成功',
    };
  }
}

export default BaseContoller;
