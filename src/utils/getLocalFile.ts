import fs from 'fs';

/**
 * This function loads the content of a file located
 * on the file system of the user.
 * @param filePath the path of the file.
 */
export function getLocalFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, {encoding: 'utf-8'}, (error, data) => {
      if (error) {
        reject(`Cannot load the file located at: ${filePath}`);
      }
      resolve(data);
    });
  });
}
