import fs from 'fs/promises';

/**
 * Reads a CSV database file and returns a promise with student data by field.
 * @param {string} filePath The path to the database file.
 * @returns {Promise<object>} A promise that resolves with an object of student first names per field.
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const parts = student.split(',');
        const firstName = parts[0].trim();
        const field = parts[parts.length - 1].trim();
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });
      resolve(fields);
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

export default readDatabase;
