// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFault from '../../../app/controller/Fault';
import ExportPhenomenon from '../../../app/controller/Phenomenon';
import ExportReason from '../../../app/controller/Reason';
import ExportSolution from '../../../app/controller/Solution';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    fault: ExportFault;
    phenomenon: ExportPhenomenon;
    reason: ExportReason;
    solution: ExportSolution;
    home: ExportHome;
  }
}
