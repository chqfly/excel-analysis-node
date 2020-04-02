// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFault from '../../../app/service/Fault';
import ExportPhenomenon from '../../../app/service/Phenomenon';
import ExportReason from '../../../app/service/Reason';
import ExportSolution from '../../../app/service/Solution';

declare module 'egg' {
  interface IService {
    fault: ExportFault;
    phenomenon: ExportPhenomenon;
    reason: ExportReason;
    solution: ExportSolution;
  }
}
