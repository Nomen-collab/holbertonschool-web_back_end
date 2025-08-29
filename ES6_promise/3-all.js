import { uploadPhoto, createUser } from './utils.js';

/**
 * Handles the profile signup by resolving multiple promises.
 * Logs the photo and user information or an error message.
 * @returns {Promise<void>} A promise that logs the final result.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
