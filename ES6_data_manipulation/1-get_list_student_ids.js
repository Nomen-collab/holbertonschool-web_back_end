/**
 * Returns an array of student ids from a list of student objects.
 * @param {Array<Object>} students - The list of student objects.
 * @returns {Array<Number>} An array of student ids.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
