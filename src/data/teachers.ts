import { v4 } from "uuid";
import { Class, Section } from "./students";
export interface clases {
	Class: Class,
	Section: Section
}
export interface teacher {
	id: string,
	Name: string,
	Class: clases[]
}

export const teachers: teacher[] = [
	{ id: v4(), Name: "Rita", Class: [{ Class: 12, Section: "B" }, { Class: 5, Section: "A" }] }
]