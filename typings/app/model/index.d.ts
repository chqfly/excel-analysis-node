// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPhenomenon from '../../../app/model/phenomenon';

declare module 'egg' {
  interface IModel {
    Phenomenon: ReturnType<typeof ExportPhenomenon>;
  }
}
