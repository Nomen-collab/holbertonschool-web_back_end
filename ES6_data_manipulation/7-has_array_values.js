/**
 * Checks if all elements in an array exist within a Set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} True if all values exist, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
