/**
 * Creates and returns a resolved promise with user information.
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @returns {Promise<Object>} A resolved promise with an object containing user names.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
