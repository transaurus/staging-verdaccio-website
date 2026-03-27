"use strict";

var _clipanion = require("clipanion");
var _contributors = require("./api/contributors");
var _dockerPullCommand = require("./api/dockerPullCommand");
var _ecosystemDownloadsCommand = require("./api/ecosystemDownloadsCommand");
var _fetchAllDownloadsCommand = require("./api/fetchAllDownloadsCommand");
var _npmjsApiDownloadCommand = require("./api/npmjsApiDownloadCommand");
var _npmjsApiDownloadPoints = require("./api/npmjsApiDownloadPoints");
var _translationsCommand = require("./api/translationsCommand");
const [node, app, ...args] = process.argv;
const cli = new _clipanion.Cli({
  binaryLabel: `translations`,
  binaryName: `${node} ${app}`,
  binaryVersion: require('../package.json').version
});
cli.register(_translationsCommand.TranslationsApiCommand);
cli.register(_npmjsApiDownloadCommand.NpmjsApiDownloadCommand);
cli.register(_dockerPullCommand.DockerPullCommand);
cli.register(_npmjsApiDownloadPoints.FetchMonthlyDataCommand);
cli.register(_npmjsApiDownloadPoints.FetchYearlyDataCommand);
cli.register(_fetchAllDownloadsCommand.FetchAllDownloadsCommand);
cli.register(_ecosystemDownloadsCommand.EcosystemDownloadsCommand);
cli.register(_contributors.ContributorsUpdateCommand);
cli.runExit(args, _clipanion.Cli.defaultContext);
process.on('uncaughtException', function (err) {
  // eslint-disable-next-line no-console
  console.error(
  // eslint-disable-next-line max-len
  `uncaught exception, please report (https://github.com/verdaccio/verdaccio/issues) this: \n${err.stack}`);
  process.exit(1);
});
//# sourceMappingURL=run.js.map