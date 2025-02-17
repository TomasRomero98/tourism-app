import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
//Components
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId("navbar")).toBeInTheDocument();
  });
});
