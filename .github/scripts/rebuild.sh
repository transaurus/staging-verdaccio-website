#!/usr/bin/env bash
set -euo pipefail

# rebuild.sh for verdaccio/website
# Runs on existing source tree (no clone). Installs deps, builds workspace packages, builds Docusaurus.
# Monorepo: workspace packages (packages/**) need to be built before docusaurus build.
# Since staging repo may not have workspace package sources, we clone source into /tmp for those.

REPO_URL="https://github.com/verdaccio/website"
BRANCH="master"

echo "=== rebuild.sh: verdaccio/website ==="

# --- Node version: require Node 20+ ---
NODE_MAJOR=$(node --version 2>/dev/null | sed 's/v//' | cut -d. -f1 || echo "0")
echo "Current Node version: $(node --version 2>/dev/null || echo 'not found')"
if [ "$NODE_MAJOR" -lt "20" ]; then
    echo "Trying to find Node 20+ in hostedtoolcache..."
    for VER in 22 21 20; do
        HOSTED_NODE=$(ls /opt/hostedtoolcache/node/ 2>/dev/null | grep "^${VER}\." | tail -1)
        if [ -n "$HOSTED_NODE" ]; then
            export PATH="/opt/hostedtoolcache/node/$HOSTED_NODE/x64/bin:$PATH"
            break
        fi
    done
    NODE_MAJOR=$(node --version 2>/dev/null | sed 's/v//' | cut -d. -f1 || echo "0")
    if [ "$NODE_MAJOR" -lt "20" ]; then
        echo "ERROR: Need Node 20+ but have $(node --version 2>/dev/null || echo 'not found')."
        exit 1
    fi
fi
echo "Node version: $(node --version)"

# --- Corepack + pnpm@10.24.0 ---
echo "Enabling corepack..."
corepack enable || npm install -g corepack
corepack prepare pnpm@10.24.0 --activate
echo "pnpm version: $(pnpm --version)"

# We are already in the Docusaurus root (website/).
# Go up to the monorepo root to install dependencies.
DOCUSAURUS_DIR="$(pwd)"
REPO_ROOT="$(cd .. && pwd)"

cd "$REPO_ROOT"

# --- Install dependencies from monorepo root ---
echo "Installing dependencies from monorepo root..."
pnpm install --frozen-lockfile

# --- Build workspace packages needed by docusaurus.config.js ---
# The staging repo may not have package source code, so clone source into /tmp
echo "Cloning source for workspace package builds..."
TMP_SRC="/tmp/verdaccio-website-src-$$"
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$TMP_SRC"
cd "$TMP_SRC"
pnpm install --frozen-lockfile
pnpm --filter "./packages/**" build 2>/dev/null || true
pnpm --filter "@verdaccio/local-scripts" build 2>/dev/null || true

# Copy built package artifacts back to the staging repo's node_modules
echo "Copying built workspace package artifacts..."
for PKG_DIR in "$TMP_SRC"/packages/*/; do
    PKG_NAME=$(node -e "try{const p=require('$PKG_DIR/package.json');console.log(p.name)}catch(e){}" 2>/dev/null || true)
    if [ -n "$PKG_NAME" ] && [ -d "$PKG_DIR/dist" ]; then
        DEST="$REPO_ROOT/node_modules/$PKG_NAME"
        if [ -d "$DEST" ]; then
            echo "  Copying dist for $PKG_NAME..."
            cp -r "$PKG_DIR/dist" "$DEST/"
        fi
    fi
done

# Clean up tmp
rm -rf "$TMP_SRC"

# --- Build Docusaurus site ---
cd "$DOCUSAURUS_DIR"
echo "Building Docusaurus site..."
node_modules/.bin/docusaurus build

echo "[DONE] Build complete."
