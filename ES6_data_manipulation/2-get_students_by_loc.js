/**
 * Returns an array of student objects located in a specific city.
 * @param {Array<Object>} students - The list of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Array<Object>} An array of student objects in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
