import { v4 } from "uuid";

export type Class = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Section = "A" | "B" | "C" | "D" | "E" | "F"

export interface student {
    id: string,
    Name: string
    RollNo: number,
    Class: Class,
    Section: Section
}

export const students : student[]=[
    {
        id:v4(),
        Name:"Mohan",
        RollNo:1,
        Class:5,
        Section:"D"
    },
    {
        id:v4(),
        Name:"Sohan",
        RollNo:1,
        Class:6,
        Section:"D"
    },
]