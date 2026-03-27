"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchAllDownloadsCommand = void 0;
var _clipanion = require("clipanion");
var _utils = require("./utils");
class FetchAllDownloadsCommand extends _clipanion.Command {
  static paths = [['fetch-all-downloads']];
  async execute() {
    try {
      await (0, _utils.fetchAllDownloads)();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.FetchAllDownloadsCommand = FetchAllDownloadsCommand;
//# sourceMappingURL=fetchAllDownloadsCommand.js.map