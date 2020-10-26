import React from "react";
import { teacher, teachers } from "../data/teachers";
import { Actions, teacherReducer } from "../reducers/teacherReducer";

export interface teachersContext {
	teacher: teacher[];
	dispatch: React.Dispatch<Actions>;
}

export const TeacherContext = React.createContext<any | teachersContext>(
	teachers
);

export const TeacherProvider: React.FC = ({ children }): JSX.Element => {
	const [teacher, dispatch] = React.useReducer(teacherReducer, teachers);
	return (
		<TeacherContext.Provider value={{ teacher, dispatch }}>
			{children}
		</TeacherContext.Provider>
	);
};
