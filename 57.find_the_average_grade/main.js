"use strict";
let grades = [55, 77, 89, 94];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
