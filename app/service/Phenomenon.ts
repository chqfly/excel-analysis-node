import { Context } from 'egg';
import BaseService from '../public/BaseService';

export default class Phenomenon extends BaseService {
  constructor(ctx: Context) {
    super(ctx, 'Phenomenon');
  }
}
