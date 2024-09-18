// OBJECT : KEY - VALUE PAIR

let managementSystem = {
  // key : value
  schoolName: "Army Public School",
  address: "mathura cantt",
  // array of object
  classess: [
    {
      // key - value
      className: "10th",
      teacherName: "Arti",
      // array of object(student)
      students: [
        {
          studentName: "krishna kumar",
          age: 19,
          // array of object(subject)
          grade: [
            {
              subject: "Math",
              marks: 85,
              grades: "A",
              // array of object
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
        {
          studentName: "XYZ kumar",
          age: 20,
          // array of object(subject)
          grade: [
            {
              subject: "Math",
              marks: 55,
              grades: "D",
              // array of object
              assigment: [
                { title: "Assignment 1" },
                { totalMarks: [1, 2, "Arti", [1, 2, [1, 2, "jwyefgywe"]]] },
              ],
            },
            {},
          ],
        },
      ],
    },
    {
      // key - value
      className: "11th",
      teacherName: "Arti",
      // array of object(student)
      students: [
        {
          studentName: "krishna kumar",
          age: 19,
          // array of object(subject)
          grade: [
            {
              subject: "Math",
              marks: 85,
              grades: "A",
              // array of object
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
        {
          studentName: "XYZ kumar",
          age: 20,
          // array of object(subject)
          grade: [
            {
              subject: "Math",
              marks: 55,
              grades: "D",
              // array of object
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
      ],
    },
  ],
};

console.log(
  managementSystem.classess[0].students[1].grade[0].assigment[1]
    .totalMarks[3][2][2]
);

// OBJECT : KEY
// ARRAY : INDEX
// let nestedObject = {
//   // object
//   array: [
//     // array of object index
//     {
//       // object
//       second: {
//         // object
//         third: {
//           // object
//           fourth: "Char",
//         },
//       },
//     },
//   ],
// };

// console.log(nestedObject.array[0].second.third.fourth);
