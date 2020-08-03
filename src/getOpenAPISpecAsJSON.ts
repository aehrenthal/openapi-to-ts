import chalk from 'chalk';
import yaml from 'js-yaml';

import {IOpenAPISpecFile} from './types';
import {getLocalFile, getRemoteFile} from './utils';

const isYamlFile: RegExp = /\.ya?ml$/;
const isRemoteFile: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

/**
 * This function loads an OpenAPI 3.0 specification file
 * and converts it into JSON. It can either be on a remote
 * server or on the local file system of the user.
 * @param specFile the path to the OpenAPI 3.0 specification file to convert.
 */
export async function getOpenAPISpecAsJSON(specFile: string): Promise<IOpenAPISpecFile> {
  console.log(chalk.blue(`Loading OpenAPI 3.0 specification file from: ${specFile}`));

  try {
    /** Conditionally load the file from a remote server or the users file system. */
    let rawSpecFile: string | undefined = undefined;

    if (isRemoteFile.test(specFile)) {
      rawSpecFile = await getRemoteFile(specFile);
    } else {
      rawSpecFile = await getLocalFile(specFile);
    }

    /** Check if the OpenAPI 3.0 spec is a YAML or JSON file. Then we parse it accordingly. */
    if (isYamlFile.test(specFile)) {
      return yaml.safeLoad(rawSpecFile) as IOpenAPISpecFile;
    } else {
      return JSON.parse(rawSpecFile) as IOpenAPISpecFile;
    }
  } catch (error) {
    throw new Error(error);
  }
}
