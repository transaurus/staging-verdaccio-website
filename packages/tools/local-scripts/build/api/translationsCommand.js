"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationsApiCommand = void 0;
var _clipanion = require("clipanion");
var _utils = require("./utils");
class TranslationsApiCommand extends _clipanion.Command {
  static paths = [['translations']];
  async execute() {
    try {
      // fetch translations api and write to file
      await (0, _utils.fetchTranslationsAPI)();
      // fetch npmjs downloads api and write to file

      // fetch docker downloads api and write to file
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }
  }
}
exports.TranslationsApiCommand = TranslationsApiCommand;
//# sourceMappingURL=translationsCommand.js.map