import { v4 } from "uuid";
import { Class, Section } from "../data/students";
import { students, student } from "../data/students";
export type Actions = {
    type: "ADD_STUDENT",
    Name: string,
    Roll_No: number,
    Class: Class,
    Section: Section
} | {
    type: "REMOVE_STUDENT",
    id: string
} | {
    type: "EDIT_STUDENT",
    id: string,
    Name: string,
    Roll_No: number,
    Class: Class,
    Section: Section
}

export const studentReducer = (state: student[] = students, action: Actions) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [
                ...state,
                {
                    id: v4(),
                    Name: action.Name,
                    RollNo: action.Roll_No,
                    Class: action.Class,
                    Section: action.Section
                }
            ]

        case "REMOVE_STUDENT":
            return [
                ...state.filter(student => student.id !== action.id)
            ]

        case "EDIT_STUDENT":
            const copyState = [...state]
            copyState.map(student => {
                if (student.id === action.id) {
                    student.Name = action.Name;
                    student.RollNo = action.Roll_No;
                    student.Class = action.Class;
                    student.Section = action.Section
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