const course = {
    name: 'JavaScript Foundations',
    instructors: ['Brandon', 'Shane', 'Mike'],
    students: [
        {
            name: 'Donna',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Alex',
            computer: {
                OS: 'macOS',
                type: 'iMac'
            }
        },
        {
            name: 'Linda',
            computer: {
                OS: 'unix',
                type: 'mainframe'
            }
        }
    ]
};

const name = course.name;                               // course name
const teacher = course.instructors[1];                  // second instructor
const student = course.students[0].name;                // course first student's name
const computerType = course.students[1].computer.type;  // second student's computer type

console.log('Course Name:', name);
console.log('Second teacher:', teacher);
console.log('First Student', student);
console.log('Alex\'s computer type:', computerType);

// Bonus: An array of all the students that are using macOS.
const coolStudents = course.students.filter(student => student.computer.OS === "macOS").map(student => student.name);
console.log('Students using macOS:', coolStudents);