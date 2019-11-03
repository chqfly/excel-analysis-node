import BaseController from '../public/BaseController';
import { Context } from 'egg';
import Phenomenon from '../service/Phenomenon';

class PhenomenonController extends BaseController {

  private phenomenonService: Phenomenon;

  public constructor(ctx: Context) {
    super(ctx);
    this.phenomenonService = ctx.service.phenomenon;
  }

  public async index() {
    const data = await this.phenomenonService.getList();
    this.success(data);
  }

  public async create() {
    const { body } = this.ctx.request;
    this.ctx.validate({ name: 'string' });
    await this.phenomenonService.model.create({ name: body.name });
    this.success(body);
  }

  public async update() {
    const id = this.ctx.params.id;
    const data = this.ctx.request.body;
    this.ctx.validate({ name: 'string' });
    const { ok } = await this.phenomenonService.model.updateOne({ _id: id }, { ...data });
    if (ok) {
      this.success(true);
    }
  }
}

export default PhenomenonController;
