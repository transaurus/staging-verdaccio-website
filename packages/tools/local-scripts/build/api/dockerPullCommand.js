"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DockerPullCommand = void 0;
var _clipanion = require("clipanion");
var _utils = require("./utils");
class DockerPullCommand extends _clipanion.Command {
  static paths = [['docker-pull-api-download']];
  async execute() {
    try {
      await (0, _utils.dockerPullWeekly)();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.DockerPullCommand = DockerPullCommand;
//# sourceMappingURL=dockerPullCommand.js.map