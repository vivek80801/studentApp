import React from "react";
import { render } from "@testing-library/react";
import Default from "./Default";

it("should be render", () => {
	const { getByText } = render(<Default />);
	const textElement = getByText("page not found");
	expect(textElement).toBeInTheDocument();
});
