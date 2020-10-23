import React from "react";
import { render } from "@testing-library/react";
import { StudentsProvider } from "../../context/StudentsContext";
import { TeacherProvider } from "../../context/TeacherContext";
import Home from "./Home";

it("should be render", () => {
  const { getByText } = render(
    <StudentsProvider>
      <TeacherProvider>
        <Home />
      </TeacherProvider>
    </StudentsProvider>
  );
  const textElement = getByText("Welcome to Student App");
  expect(textElement).toBeInTheDocument();
});
