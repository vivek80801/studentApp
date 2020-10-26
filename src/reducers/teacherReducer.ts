import { teacher, clases, teachers } from "../data/teachers";
import { v4 } from "uuid";

export type Actions = {
	type: "ADD_TEACHER",
	Name: string,
	Class: clases[]

} | {
	type: "REMOVE_TEACHER",
	id: string
} | {
	type: "EDIT_TEACHER",
	id: string,
	Name: string,
	Class: clases[]
}

export const teacherReducer = (state: teacher[] = teachers, action: Actions) => {
	switch (action.type) {
		case "ADD_TEACHER":
			return [
				...state,
				{
					id: v4(),
					Name: action.Name,
					Class: action.Class,
				}
			]

		case "REMOVE_TEACHER":
			return [
				...state.filter(student => student.id !== action.id)
			]

		case "EDIT_TEACHER":
			const copyState = [...state]
			copyState.map(student => {
				if (student.id === action.id) {
					student.Name = action.Name;
					student.Class = action.Class;
				} else {
					return student
				}
				return student
			})
			return copyState

		default:
			return state
	}
}