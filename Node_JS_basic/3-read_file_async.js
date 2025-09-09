const fs = require('fs').promises;

/**
 * Reads a database file asynchronously and prints student statistics.
 * @param {string} path The path to the database file.
 * @returns {Promise<void>} A promise that resolves when the stats are printed.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((student) => {
          const parts = student.split(',');
          const field = parts[parts.length - 1].trim();
          const firstName = parts[0].trim();
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
