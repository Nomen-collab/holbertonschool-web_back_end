import ClassRoom from './0-classroom.js';

/**
 * Creates an array of 3 ClassRoom objects.
 * @returns {Array<ClassRoom>} An array of 3 ClassRoom objects with specific sizes.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}
