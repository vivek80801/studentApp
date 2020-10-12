import React from "react";
import { render } from "@testing-library/react";
import Students from "./Students";
import { StudentsProvider } from "../../context/StudentsContext";

it("should be render", () => {
  const { getByText } = render(
    <StudentsProvider>
      <Students />
    </StudentsProvider>
  );
  const textElement = getByText("Add Student");
  expect(textElement).toBeInTheDocument();
});
