import fs from 'fs';

/**
 * This function loads the content of a file located
 * on a remote server.
 * @param file the location of the file.
 */
export function getRemoteFile(file: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(file, {encoding: 'utf-8'}, (error, data) => {
      if (error) {
        reject(`Cannot load the file located at: ${file}`);
      }
      resolve(data);
    });
  });
}
