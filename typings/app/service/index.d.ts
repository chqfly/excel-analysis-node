// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPhenomenon from '../../../app/service/Phenomenon';

declare module 'egg' {
  interface IService {
    phenomenon: ExportPhenomenon;
  }
}
