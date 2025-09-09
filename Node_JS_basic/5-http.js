const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

/**
 * Reads a database file asynchronously and returns a promise with student statistics.
 * @param {string} path The path to the database file.
 * @returns {Promise<string>} A promise that resolves with the formatted student stats.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then(data => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);
        let response = `Number of students: ${students.length}\n`;

        const fields = {};
        students.forEach(student => {
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
            response += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
          }
        }
        resolve(response.trim());
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then(data => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(error => {
        res.statusCode = 500;
        res.end(error.message);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
