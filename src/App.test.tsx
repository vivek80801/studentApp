import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { StudentsProvider } from "./context/StudentsContext";

describe("main test", () => {
  it("renders student app", () => {
    const { getByText } = render(<App />);
    const textElememt = getByText("Welcome to Student App");
    expect(textElememt).toBeInTheDocument();
  });
  it("should go to student page", () => {
    const { getByText,  } = render(
      <StudentsProvider>
        <App />
      </StudentsProvider>
    );
    const navText = getByText("Students");
    fireEvent.click(navText);
  });
});
