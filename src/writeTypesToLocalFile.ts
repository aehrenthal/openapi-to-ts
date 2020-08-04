import fs from 'fs';
import path from 'path';

/**
 * Use this method to write the types to the local file system
 * of the users computer. It recursively creates missing directories.
 * @param filePath the path where the file should be written to.
 * @param types the types to write to the specified filePath.
 */
export const writeTypesToLocalFile = (filePath: string, types: string): void => {
  /** Make sure that the directories exist, otherwise create them. */
  const parentDirectories = filePath.split(path.sep);
  parentDirectories.map((_, index) => {
    const existingDirectory = path.resolve(process.cwd(), ...parentDirectories.slice(0, index));
    if (!fs.existsSync(existingDirectory)) {
      fs.mkdirSync(existingDirectory);
    }
  });

  /** Finally write the file to the specified location. */
  fs.writeFileSync(filePath, types, 'utf8');
};
