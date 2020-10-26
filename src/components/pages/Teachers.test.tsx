import React from "react";
import { render } from "@testing-library/react";
import Teachers from "./Teachers";
import { TeacherProvider } from "../../context/TeacherContext";

it("should be render", () => {
	const { getByText } = render(
		<TeacherProvider>
			<Teachers />
		</TeacherProvider>
	);
	const textElement = getByText("Add Teachers");
	expect(textElement).toBeInTheDocument();
});
