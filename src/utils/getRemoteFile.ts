import http from 'http';
import https from 'https';

/**
 * This function loads the content of a file located
 * on a remote server.
 * @param filePath the path of the file.
 * @param githubToken the github token that should be attached to the request.
 */
export const getRemoteFile = (filePath: string, githubToken?: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    /**
     * We need to choose a different HTTP client depending
     * on the protocol. The default client is HTTP.
     */
    let client: any = http;
    if (filePath.toString().indexOf('https') === 0) {
      client = https;
    }

    /** Add authorization headers if a github token is specified. */
    let options = {};
    if (githubToken) {
      options = {
        headers: {
          Authorization: `token ${githubToken}`
        }
      };
    }

    client
      .get(filePath, options, (response: any) => {
        /** Encode the response in UTF-8. */
        response.setEncoding('utf-8');

        let data = '';

        /** Executed when a chunk of data has been recieved. */
        response.on('data', (chunk: string) => {
          data += chunk;
        });

        /** Executed when the whole response has been received. */
        response.on('end', () => {
          if (response.statusCode !== 200) {
            let errorMessage = `There was an HTTP error fetching your specification file: ${response.statusCode} ${response.statusMessage}.\n`;
            if (githubToken) errorMessage += 'Either the file does not exist, or your personal access token is wrong.';
            reject(errorMessage);
          } else {
            resolve(data);
          }
        });
      })
      .on('error', () => {
        reject(`Cannot load the file located at: ${filePath}`);
      });
  });
};
