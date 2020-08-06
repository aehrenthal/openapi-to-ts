import chalk from 'chalk';
import yaml from 'js-yaml';

import {IOpenAPISpecFile} from './types';
import {getLocalFile, getRemoteFile} from './utils';

const isYamlFile = /\.ya?ml$/;
const isRemoteFile = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

/**
 * This function loads an OpenAPI 3.0 specification file
 * and converts it into JSON. It can either be on a remote
 * server or on the local file system of the user.
 * @param filePath the path to the OpenAPI 3.0 specification file to convert.
 * @param githubToken the github token that should be attached to the request.
 */
export const getOpenAPISpecAsJSON = async (filePath: string, githubToken?: string): Promise<IOpenAPISpecFile> => {
  console.log(chalk.blue(`Loading OpenAPI 3.0 specification file from: ${filePath}`));

  try {
    /** Conditionally load the file from a remote server or the users file system. */
    let rawSpecFile: string | undefined = undefined;

    if (isRemoteFile.test(filePath)) {
      rawSpecFile = await getRemoteFile(filePath, githubToken);
    } else {
      rawSpecFile = await getLocalFile(filePath);
    }

    if (!rawSpecFile) {
      throw new Error('The retrieved OpenAPI 3.0 specification file is not valid.');
    }

    /** Check if the OpenAPI 3.0 spec is a YAML or JSON file. Then we parse it accordingly. */
    if (isYamlFile.test(filePath)) {
      return yaml.safeLoad(rawSpecFile) as IOpenAPISpecFile;
    } else {
      return JSON.parse(rawSpecFile) as IOpenAPISpecFile;
    }
  } catch (error) {
    throw new Error(error);
  }
};
