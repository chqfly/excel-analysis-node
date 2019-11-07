import { Context } from 'egg';
import BaseService from '../public/BaseService';

export default class Fault extends BaseService {
  constructor(ctx: Context) {
    super(ctx, 'Fault');
  }
}
