import http from 'http';
import https from 'https';

/**
 * This function loads the content of a file located
 * on a remote server.
 * @param filePath the path of the file.
 */
export const getRemoteFile = (filePath: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    /**
     * We need to choose a different HTTP client depending
     * on the protocol. The default client is HTTP.
     */
    let client: any = http;

    if (filePath.toString().indexOf('https') === 0) {
      client = https;
    }

    client
      .get(filePath, (response: any) => {
        /** Encode the response in UTF-8. */
        response.setEncoding('utf-8');

        let data: string = '';

        /** Executed when a chunk of data has been recieved. */
        response.on('data', (chunk: string) => {
          data += chunk;
        });

        /** Executed when the whole response has been received. */
        response.on('end', () => {
          resolve(data);
        });
      })
      .on('error', () => {
        reject(`Cannot load the file located at: ${filePath}`);
      });
  });
};
