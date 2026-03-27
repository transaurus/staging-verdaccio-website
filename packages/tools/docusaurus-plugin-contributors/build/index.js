"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_OPTIONS = void 0;
exports.default = contributorsPlugin;
var _utils = require("@docusaurus/utils");
var _nodeFs = require("node:fs");
var _nodePath = require("node:path");
/* eslint-disable no-console */

const DEFAULT_OPTIONS = exports.DEFAULT_OPTIONS = {
  debug: false
};
function contributorsPlugin(context, opts) {
  const {
    baseUrl
  } = context.siteConfig;
  const options = {
    ...DEFAULT_OPTIONS,
    ...opts
  };
  const {
    pathFileName,
    debug = true
  } = options;
  if (debug) {
    console.log('[CONTRIBUTORS_PLUGIN] Opts Input:', opts);
    console.log('[CONTRIBUTORS_PLUGIN] Options:', options);
  }
  return {
    name: 'docusaurus-plugin-contributors',
    async loadContent() {
      let content = null;
      const contributorsFilesName = pathFileName || (0, _nodePath.join)(__dirname, 'contributors.json');
      try {
        content = JSON.parse((0, _nodeFs.readFileSync)(contributorsFilesName, 'utf8'));
        return {
          contributors: content.contributors,
          repositories: content.repositories
        };
      } catch (error) {
        console.log('error', error);
        return {
          error: true
        };
      }
    },
    async contentLoaded({
      content,
      actions
    }) {
      const {
        createData,
        addRoute
      } = actions;
      if (!content) {
        return;
      }
      const contributorsJsonPath = await createData('contributors.json', JSON.stringify(content));
      const routeOptions = {
        path: (0, _utils.normalizeUrl)([baseUrl, 'contributors']),
        component: '@site/src/components/Contributors.tsx',
        modules: {
          data: contributorsJsonPath
        },
        exact: true
      };
      if (debug) {
        console.error('[CONTRIBUTORS_PLUGIN] Route:', routeOptions);
      }
      // @ts-ignore
      addRoute(routeOptions);
    }
  };
}
//# sourceMappingURL=index.js.map