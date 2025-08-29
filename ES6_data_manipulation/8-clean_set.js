/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The Set of values.
 * @param {string} startString - The string to check for at the beginning of each value.
 * @returns {string} A string of filtered values separated by a hyphen, or an empty string.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const filteredValues = Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length));
  
  return filteredValues.join('-');
}
