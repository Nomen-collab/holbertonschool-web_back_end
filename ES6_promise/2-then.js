/**
 * Handles the resolution or rejection of a Promise.
 * @param {Promise<any>} promise - The promise to handle.
 * @returns {Promise<Object|Error>} An object on resolution, or an empty Error on rejection.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
