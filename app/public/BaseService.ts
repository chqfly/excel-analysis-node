import { Service, Context } from 'egg';
class BaseService extends Service {

  public modelName: string;

  constructor(ctx: Context, modelName: string) {
    super(ctx);
    this.modelName = modelName;
  }

  /**
   * modelName首字母必须大写
   */
  public get model() {
    return this.ctx.model[this.modelName];
  }
}

export default BaseService;
