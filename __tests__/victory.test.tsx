import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { PieChart } from "../pages/victory";
// import cy from 'cypress';

describe("Home", () => {
  it("renders a PieChart", () => {
    const { container } = render(<PieChart />);

    console.log(container.outerHTML);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders PieChart unchanged", () => {
    const tree = renderer.create(<PieChart />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
