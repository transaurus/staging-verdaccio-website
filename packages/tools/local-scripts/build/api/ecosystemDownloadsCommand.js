"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EcosystemDownloadsCommand = void 0;
var _clipanion = require("clipanion");
var _utils = require("./utils");
class EcosystemDownloadsCommand extends _clipanion.Command {
  static paths = [['fetch-ecosystem-downloads']];
  async execute() {
    try {
      await (0, _utils.fetchEcosystemDownloads)();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.EcosystemDownloadsCommand = EcosystemDownloadsCommand;
//# sourceMappingURL=ecosystemDownloadsCommand.js.map