import React from "react";
import { student, students } from "../data/students";
import { Actions, studentReducer } from "../reducers/studentReducer";

export interface studentsContext {
  student: student[];
  dispatch: React.Dispatch<Actions>;
}

export const StudentContext = React.createContext<any | studentsContext>(
  students
);

export const StudentsProvider: React.FC = ({ children }): JSX.Element => {
  const [student, dispatch] = React.useReducer(studentReducer, students);
  return (
    <StudentContext.Provider value={{ student, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
