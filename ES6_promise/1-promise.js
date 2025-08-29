/**
 * Returns a Promise that resolves or rejects based on the boolean argument.
 * @param {boolean} success - A boolean to determine if the promise should resolve or reject.
 * @returns {Promise<any>} A Promise that resolves with an object or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
