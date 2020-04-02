import { Context } from 'egg';
import BaseController from '../public/BaseController';
import Fault from '../service/Fault';

class FaultContoller extends BaseController {

  private faultService: Fault;

  public constructor(ctx: Context) {
    super(ctx);
    this.faultService = ctx.service.fault;
  }

  public async index() {
    const res = await this.faultService.model.find();
    this.success(res);
  }

  public async show() {
    const { id } = this.ctx.params;
    const res = await this.faultService.model.findById(id);
    this.success(res);
  }

  public async create() {
    const body = this.ctx.request.body;
    const rules = {
      name: 'string',
    };

    this.ctx.validate(rules, body);
    await this.faultService.model.create(body);
    this.success(true);
  }

  public async update() {
    const id = this.ctx.params.id;
    const body = this.ctx.request.body;
    const rules = {
      name: 'string',
    };

    this.ctx.validate(rules, body);
    const { ok } = await this.faultService.model.updateOne({ _id: id }, { ...body });
    if (ok) {
      this.success(true);
    }
  }

  public async destroy() {
    const id = this.ctx.params.id;
    await this.faultService.model.findByIdAndRemove(id);
    this.success(true);
  }
}

export default FaultContoller;
