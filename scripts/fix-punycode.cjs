const Module = require('module');
const { register } = require('node:module');
const { pathToFileURL } = require('node:url');
const { join } = require('node:path');

// Force CJS requires of Node's deprecated builtin onto the userland package.
const userlandPunycode = require('punycode/');
const originalLoad = Module._load;

Module._load = function loadPunycodeAlias(request, parent, isMain) {
  if (request === 'punycode' || request === 'node:punycode') {
    return userlandPunycode;
  }

  return originalLoad.apply(this, arguments);
};

// Same redirect for ESM imports (e.g. rehype-citation).
register(
  pathToFileURL(join(__dirname, 'punycode-resolve.mjs')).href,
  pathToFileURL(join(__dirname, './')),
);
