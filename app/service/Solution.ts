import { Context } from 'egg';
import BaseService from '../public/BaseService';

export default class Solution extends BaseService {
  constructor(ctx: Context) {
    super(ctx, 'Solution');
  }
}
