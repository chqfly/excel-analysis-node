import BaseController from '../public/BaseController';
import { Context } from 'egg';
import Reason from '../service/Reason';
import Phenomenon from '../service/Phenomenon';

class ReasonController extends BaseController {

  private reasonService: Reason;
  private phenomenonService: Phenomenon;

  public constructor(ctx: Context) {
    super(ctx);
    this.reasonService = ctx.service.reason;
    this.phenomenonService = ctx.service.phenomenon;
  }

  public async index() {
    const data = await this.reasonService.model.find();
    this.success(data);
  }

  public async create() {
    const { body } = this.ctx.request;
    this.ctx.validate({ name: 'string' });
    const { _id: reasonId } = await this.reasonService.model.create({ name: body.name });

    const { ok } = await this.phenomenonService.model.updateOne(
      { _id: body.phenomenonId },
      { $push: { reasons: reasonId } },
    );

    if (ok) {
      this.success(ok);
    }
  }

  public async update() {
    const id = this.ctx.params.id;
    const data = this.ctx.request.body;
    this.ctx.validate({ name: 'string' });
    const { ok } = await this.reasonService.model.updateOne({ _id: id }, { ...data });
    if (ok) {
      this.success(true);
    }
  }
}

export default ReasonController;
