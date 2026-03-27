"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchYearlyDataCommand = exports.FetchMonthlyDataCommand = void 0;
var _clipanion = require("clipanion");
var _utils = require("./utils");
class FetchMonthlyDataCommand extends _clipanion.Command {
  static paths = [['fetch-monthly-data']];
  async execute() {
    try {
      await (0, _utils.fetchMonthlyData)();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.FetchMonthlyDataCommand = FetchMonthlyDataCommand;
class FetchYearlyDataCommand extends _clipanion.Command {
  static paths = [['fetch-yearly-data']];
  async execute() {
    try {
      await (0, _utils.fetchYearlyData)();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.FetchYearlyDataCommand = FetchYearlyDataCommand;
//# sourceMappingURL=npmjsApiDownloadPoints.js.map