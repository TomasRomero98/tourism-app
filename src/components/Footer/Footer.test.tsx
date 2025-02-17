import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
//Components
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toBeInTheDocument();
  });
});
