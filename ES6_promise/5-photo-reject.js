/**
 * Returns a rejected promise with an error message.
 * @param {string} filename - The name of the file.
 * @returns {Promise<Error>} A promise that rejects with an error.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
