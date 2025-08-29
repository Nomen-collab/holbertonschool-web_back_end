/**
 * Updates the quantity of unique items in a map.
 * @param {Map} map - The map of grocery items.
 * @returns {Map} The updated map.
 * @throws {Error} If the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
