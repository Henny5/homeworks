(function () {
  "use strict";

  class Student {
    constructor(firstName, lastName, age, grade) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.grade = grade;
    }
  }

  const henny = new Student("henny", "davidowitz", 22, "F");

  const students = [
    henny,
    new Student("shana", "halpert", 20, "A"),
    new Student("rivka", "stern", 10, "B"),
  ];

  function printStudents(backwards, ...students) {
    students.forEach((student) => {
      let { firstName: a, lastName: b, age, grade } = student;
      if (backwards) {
        [a, b] = [b, a];
      }
      console.log(`${a} ${b} ${age} ${grade}`);
    });
  }

  printStudents(false, ...students);
  printStudents(true, ...students);

  function copyStudent(student) {
    const { firstName, lastName, ...rest } = student;
    return { lastName: firstName, firstName: lastName, ...rest };
  }

  console.log(copyStudent(henny));
})();
