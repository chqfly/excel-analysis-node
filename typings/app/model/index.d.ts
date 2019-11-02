// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPhenomenon from '../../../app/model/phenomenon';
import ExportReason from '../../../app/model/reason';
import ExportSolution from '../../../app/model/solution';

declare module 'egg' {
  interface IModel {
    Phenomenon: ReturnType<typeof ExportPhenomenon>;
    Reason: ReturnType<typeof ExportReason>;
    Solution: ReturnType<typeof ExportSolution>;
  }
}
