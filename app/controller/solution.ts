import { Controller } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default class Solution extends Controller {

  public async index() {
    const filePath = path.join(__dirname, '../data/solution.json');
    await new Promise(reslove => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return;
        this.ctx.status = 200;
        this.ctx.body = {
          data: JSON.parse(data),
        };
        reslove();
      });
    });
  }

  public async create() {
    const filePath = path.join(__dirname, '../data/solution.json');
    const data = this.ctx.request.body.data;
    await new Promise(reslove => {
      fs.writeFile(filePath, JSON.stringify(data), 'utf8', err => {
        if (err) return;
        this.ctx.status = 200;
        this.ctx.body = {
          data: true,
        };
        reslove();
      });
    });
  }
}
