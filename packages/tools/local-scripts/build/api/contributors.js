"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContributorsUpdateCommand = void 0;
var _contributors = _interopRequireDefault(require("@dianmora/contributors"));
var _clipanion = require("clipanion");
var _promises = _interopRequireDefault(require("fs/promises"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable new-cap */

/* eslint-disable no-console */

class ContributorsUpdateCommand extends _clipanion.Command {
  static paths = [['contributors-update']];
  static usage = _clipanion.Command.Usage({
    description: 'Fetch contributors from GitHub and update local JSON files.',
    details: `
      This command replaces the previous standalone contributors-update script.
    `
  });
  async execute() {
    const token = process.env.TOKEN;
    const excludedAccounts = ['verdacciobot', 'github-actions[bot]', 'dependabot-preview[bot]', 'dependabot[bot]', '64b2b6d12bfe4baae7dad3d01', 'greenkeeper[bot]', 'snyk-bot', 'allcontributors[bot]', 'renovate[bot]', 'undefined', 'renovate-bot'];
    try {
      const result = await (0, _contributors.default)({
        token: token,
        organization: 'verdaccio',
        excludedAccounts,
        allowFork: false,
        allowPrivateRepo: false
      });

      // __dirname at runtime is build/api/, go up to packages/tools/
      const toolsDir = _path.default.resolve(__dirname, '../../..');
      const pathContributorsFile = _path.default.join(toolsDir, 'docusaurus-plugin-contributors/src/contributors.json');
      await _promises.default.writeFile(pathContributorsFile, JSON.stringify(result, null, 4));
      const contributorsListId = result.contributors.map(c => ({
        username: c?.login,
        id: c.id
      }));
      const pathContributorsUIFile = _path.default.join(toolsDir, '../../packages/plugins/ui-theme/src/components/Contributors/generated_contributors_list.json');
      try {
        await _promises.default.writeFile(pathContributorsUIFile, JSON.stringify(contributorsListId, null, 4));
      } catch {
        console.warn(`[contributors] Skipped UI file (path not found): ${pathContributorsUIFile}`);
      }
    } catch (err) {
      console.error('error on update', err);
      process.exit(1);
    }
  }
}
exports.ContributorsUpdateCommand = ContributorsUpdateCommand;
//# sourceMappingURL=contributors.js.map