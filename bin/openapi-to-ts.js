#!/usr/bin/env node

'strict mode';

var program = require('commander');
var packageJson = require('../package.json');
var openAPIToTS = require('../dist');

program
  .version(packageJson.version, '-v, --version', 'Output the package version number.')
  .description(packageJson.description)
  .requiredOption('-i, --input <input>', 'Convert specified OpenAPI 3.0 specification file to TypeScript types.')
  .requiredOption('-o, --output <output>', 'Specify the output file the TypeScript types should be written to.');

program.parse(process.argv);

const {input, output} = program;

openAPIToTS.convertOpenApiToTS(input, output);

process.exit(0);
