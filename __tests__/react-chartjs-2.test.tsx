import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ReactChartjs2 from "../pages/react-chartjs-2";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
  Line: () => null,
  Radar: () => null,
  Pie: () => null,
}));

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<ReactChartjs2 />);

    console.log(container.outerHTML);
  });
});
