import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];
    readDatabase(databasePath)
      .then((fields) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        sortedFields.forEach((field) => {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          responseText += `Number of students in ${field}: ${count}. List: ${list}\n`;
        });
        response.status(200).send(responseText.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databasePath = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        const students = fields[major];
        if (students) {
          response.status(200).send(`List: ${students.join(', ')}`);
        } else {
          response.status(200).send(`List: `); // In case the major is valid but has no students
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
