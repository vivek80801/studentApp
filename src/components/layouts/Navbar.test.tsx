import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

it("should be render", () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const textElement = getByText("My App");
  expect(textElement).toBeInTheDocument();
});
