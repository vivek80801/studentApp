import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { StudentsProvider } from "./context/StudentsContext";
import { TeacherProvider } from "./context/TeacherContext";

describe("main test", () => {
  it("renders student app", () => {
    const { getByText } = render(
      <TeacherProvider>
        <StudentsProvider>
          <App />
        </StudentsProvider>
      </TeacherProvider>
    );
    const textElememt = getByText("Welcome to Student App");
    expect(textElememt).toBeInTheDocument();
  });
  it("should go to student page", () => {
    const { getByText } = render(
      <StudentsProvider>
        <TeacherProvider>
          <App />
        </TeacherProvider>
      </StudentsProvider>
    );
    const navText = getByText("Students");
    fireEvent.click(navText);
  });
});
