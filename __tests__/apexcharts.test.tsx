import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BarChart } from "../components/apexcharts/bar";

// jest.mock("react-apexcharts", () => {
//   return {
//     __esModule: true,
//     // eslint-disable-next-line
//     default: () => {
//       return <p />;
//     },
//   };
// });

describe("ApexCharts", () => {
  it.only("renders a BarChart", () => {
    console.log("foo");

    const { container } = render(<BarChart />);

    console.log(container.outerHTML);

    // expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders PieChart unchanged", () => {
    const tree = renderer.create(<BarChart />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
