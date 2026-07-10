import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const punycodePath = require.resolve('punycode/punycode.js');
const punycodeUrl = pathToFileURL(punycodePath).href;

export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'punycode' || specifier === 'node:punycode') {
    return {
      shortCircuit: true,
      url: punycodeUrl,
    };
  }

  return nextResolve(specifier, context);
}
