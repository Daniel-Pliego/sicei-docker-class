import { Student } from "@/Models/Student";

const studentsDB: Student[] = [];

export const getStudents = () => {
  return studentsDB;
};

export const createStudent = (student: Student) => {
  studentsDB.push(student);
};

export const deleteStudent = (id: string) => {
  const index = studentsDB.findIndex((student) => student.id === id);
  studentsDB.splice(index, 1);
};

export const updateStudent = (newInfo: Student) => {
  const index = studentsDB.findIndex((student) => student.id === newInfo.id);
  studentsDB[index] = newInfo;
};
