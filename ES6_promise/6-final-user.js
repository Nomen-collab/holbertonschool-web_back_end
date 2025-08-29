import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles the profile signup and returns an array of promise statuses and values.
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} fileName - The name of the photo file.
 * @returns {Promise<Array<Object>>} An array of objects with the status and value/error of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason)
    })));
}
