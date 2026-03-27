"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NpmjsApiDownloadCommand = void 0;
var _clipanion = require("clipanion");
var _utils = require("./utils");
class NpmjsApiDownloadCommand extends _clipanion.Command {
  static paths = [['npmjs-api-download']];
  async execute() {
    try {
      await (0, _utils.fetchNpmjsApiDownloadsWeekly)();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.NpmjsApiDownloadCommand = NpmjsApiDownloadCommand;
//# sourceMappingURL=npmjsApiDownloadCommand.js.map