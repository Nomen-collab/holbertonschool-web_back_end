/**
 * Returns the sum of all student ids.
 * @param {Array<Object>} students - The list of student objects.
 * @returns {Number} The sum of all student ids.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
