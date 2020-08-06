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
  .option(
    '--githubToken <token>',
    'Attach a GitHub personal access token to the request if fetching the input remotely.'
  )
  .option('--prefixWithI', 'Append the letter `I` as a prefix to all interface names.')
  .action(async (options) => {
    try {
      /** Fetch the file and convert it to JSON. */
      const specFile = await openAPIToTS.getOpenAPISpecAsJSON(options.input);
      /** Convert the OpenAPI 3.0 Spec to TypeScript types. */
      const types = openAPIToTS.convertOpenAPIToTS(specFile, options);
      /** Write the file to the file system. */
      openAPIToTS.writeTypesToLocalFile(options.output, types);
      /** Inform the user about the success. */
      console.log(chalk.green(`Successfully created the types at: ${options.output}`));
    } catch (error) {
      /** Inform the user about any errors thrown. */
      console.log(chalk.red(error));
      process.exit(1);
    }
    process.exit(0);
  });

program.parse(process.argv);
