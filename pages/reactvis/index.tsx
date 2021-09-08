import "react-vis/dist/style.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  LabelSeries,
  FlexibleXYPlot,
  LineSeries,
} from "react-vis";

function BarChart() {
  const data = [
    { x: "A", y: 10 },
    { x: "B", y: 5 },
    { x: "C", y: 1500 },
  ];

  const labelData = data.map((d, idx) => ({
    x: d.x,
    y: d.y,
  }));

  return (
    <FlexibleXYPlot xType="ordinal" Distance={100}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={data} />
      <LabelSeries data={labelData} getLabel={(d) => d.x} />
    </FlexibleXYPlot>
  );
}

function LineChart() {
  const data = [
    { x: "A", y: 10 },
    { x: "B", y: 5 },
    { x: "C", y: 1500 },
  ];

  const labelData = data.map((d, idx) => ({
    x: d.x,
    y: d.y,
  }));

  return (
    <FlexibleXYPlot xType="ordinal" Distance={100}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries data={data} />
      <LabelSeries data={labelData} getLabel={(d) => d.x} />
    </FlexibleXYPlot>
  );
}

function RadarChart() {
  return <p>RadarChart</p>;
}

function PieChart() {
  return <p>PieChart</p>;
}

export default function Reactvis() {
  return (
    <main
      style={{
        padding: "1rem",
      }}
    >
      <BarChart />
      <hr />
      <LineChart />
      <hr />
      <RadarChart />
      <hr />
      <PieChart />
    </main>
  );
}
