/**
 * Updates student grades for a specific city.
 * @param {Array<Object>} students - The list of student objects.
 * @param {string} city - The city to filter by.
 * @param {Array<Object>} newGrades - An array of grade objects.
 * @returns {Array<Object>} The updated list of student objects.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
