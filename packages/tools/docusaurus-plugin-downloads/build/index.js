"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_OPTIONS = void 0;
exports.default = downloadsPlugin;
var _utils = require("@docusaurus/utils");
/* eslint-disable no-console */

const DEFAULT_OPTIONS = exports.DEFAULT_OPTIONS = {
  debug: false
};
function downloadsPlugin(context, opts) {
  const {
    baseUrl
  } = context.siteConfig;
  const options = {
    ...DEFAULT_OPTIONS,
    ...opts
  };
  const {
    debug = true
  } = options;
  if (debug) {
    console.log('[DOWNLOADS_PLUGIN] Opts Input:', opts);
    console.log('[DOWNLOADS_PLUGIN] Options:', options);
  }
  return {
    name: 'docusaurus-plugin-downloads',
    async loadContent() {
      return {};
    },
    async contentLoaded({
      content,
      actions
    }) {
      const {
        addRoute
      } = actions;
      if (!content) {
        return;
      }
      const routeOptions = {
        path: (0, _utils.normalizeUrl)([baseUrl, 'downloads']),
        component: '@site/src/components/Downloads.tsx',
        modules: {
          data: []
        },
        exact: true
      };
      if (debug) {
        console.error('[DOWNLOADS_PLUGIN] Route:', routeOptions);
      }
      // @ts-ignore
      addRoute(routeOptions);
    }
  };
}
//# sourceMappingURL=index.js.map