"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "data", {
  enumerable: true,
  get: function () {
    return _progress_lang.default;
  }
});
Object.defineProperty(exports, "dockerPulls", {
  enumerable: true,
  get: function () {
    return _docker_pull.default;
  }
});
Object.defineProperty(exports, "ecosystemDownloads", {
  enumerable: true,
  get: function () {
    return _ecosystem_downloads.default;
  }
});
Object.defineProperty(exports, "monthlyDownloads", {
  enumerable: true,
  get: function () {
    return _monthly_downloads.default;
  }
});
Object.defineProperty(exports, "npmjsDownloads", {
  enumerable: true,
  get: function () {
    return _npmjs_downloads.default;
  }
});
exports.translationsData = void 0;
Object.defineProperty(exports, "yearlyDownloads", {
  enumerable: true,
  get: function () {
    return _yearly_downloads.default;
  }
});
var _docker_pull = _interopRequireDefault(require("./docker_pull.json"));
var _ecosystem_downloads = _interopRequireDefault(require("./ecosystem_downloads.json"));
var _monthly_downloads = _interopRequireDefault(require("./monthly_downloads.json"));
var _npmjs_downloads = _interopRequireDefault(require("./npmjs_downloads.json"));
var _progress_lang = _interopRequireDefault(require("./progress_lang.json"));
var _yearly_downloads = _interopRequireDefault(require("./yearly_downloads.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const translationsData = exports.translationsData = _progress_lang.default;
//# sourceMappingURL=index.js.map