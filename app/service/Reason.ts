import { Context } from 'egg';
import BaseService from '../public/BaseService';

export default class Reason extends BaseService {
  constructor(ctx: Context) {
    super(ctx, 'Reason');
  }
}
