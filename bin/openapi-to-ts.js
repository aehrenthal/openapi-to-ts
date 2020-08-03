#!/usr/bin/env node

var chalk = require('chalk');
var program = require('commander');
var packageJson = require('../package.json');
var openAPIToTS = require('../dist');

program
  .version(packageJson.version, '-v, --version', 'Output the package version number.')
  .description(packageJson.description)
  .requiredOption('-i, --input <input>', 'Convert specified OpenAPI 3.0 specification file to TypeScript types.')
  .requiredOption('-o, --output <output>', 'Specify the output file the TypeScript types should be written to.')
  .action(async (options) => {
    try {
      /** Fetch the file and convert it to JSON. */
      const specFile = await openAPIToTS.getOpenAPISpecAsJSON(options.input);
      console.log(specFile);
      /** Convert the OpenAPI 3.0 Spec to TypeScript types. */
      openAPIToTS.convertOpenAPIToTS(specFile, options);
    } catch (error) {
      console.log(chalk.red(error));
      process.exit(1);
    }
    process.exit(0);
  });

program.parse(process.argv);
