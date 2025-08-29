/**
 * Creates an Int8 Typed Array with a value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position to add the value.
 * @param {Number} value - The value to add.
 * @returns {DataView} A new DataView.
 * @throws {Error} If the position is out of range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
