import BaseController from '../public/BaseController';
import { Context } from 'egg';
import Solution from '../service/Solution';
import Reason from '../service/Reason';

class SolutionController extends BaseController {

  private solutionService: Solution;
  private reasonService: Reason;

  public constructor(ctx: Context) {
    super(ctx);
    this.solutionService = ctx.service.solution;
    this.reasonService = ctx.service.reason;
  }

  public async index() {
    const data = await this.solutionService.model.find();
    this.success(data);
  }

  public async create() {
    const { body } = this.ctx.request;
    this.ctx.validate({ name: 'string' });
    const { _id: solutionId } = await this.solutionService.model.create({ name: body.name });

    const { ok } = await this.reasonService.model.updateOne(
      { _id: body.reasonId },
      { $push: { solutions: solutionId } },
    );

    if (ok) {
      this.success(ok);
    }
  }

  public async update() {
    const id = this.ctx.params.id;
    const data = this.ctx.request.body;
    this.ctx.validate({ name: 'string' });
    const { ok } = await this.solutionService.model.updateOne({ _id: id }, { ...data });
    if (ok) {
      this.success(true);
    }
  }
}

export default SolutionController;
