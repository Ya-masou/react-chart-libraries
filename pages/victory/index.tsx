import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryArea,
  VictoryPolarAxis,
  VictoryPie,
} from "victory";

export function BarChart() {
  const data1 = [
    { quarter: 1, earnings: 13000, label: "data1 の quarter1" },
    { quarter: 2, earnings: 16500, label: "data1 の quarter2" },
    { quarter: 3, earnings: 14250, label: "data1 の quarter3" },
    { quarter: 4, earnings: 19000, label: "data1 の quarter4" },
  ];
  const data2 = [
    { quarter: 1, earnings: 13000, label: "data2 の ✊" },
    { quarter: 2, earnings: 16500, label: "data2 の quarter2" },
    { quarter: 3, earnings: 14250, label: "data2 の quarter3" },
    { quarter: 4, earnings: 19000, label: "data2 の quarter4" },
  ];

  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x / 1000}k`}
      />
      <VictoryStack colorScale="cool">
        <VictoryBar
          data={data1}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="earnings"
          labelComponent={<VictoryTooltip cornerRadius={8} />}
          style={{
            data: {
              fill: "tomato",
              strokeWidth: "4px",
              stroke: "red",
              width: 20,
            },
          }}
        />
        <VictoryBar
          data={data2}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="earnings"
        />
      </VictoryStack>
    </VictoryChart>
  );
}

export function LineChart() {
  interface Data {
    x: number;
    y: number;
    label: string;
  }
  const data = [
    { x: 1, y: 13000, label: "1" },
    { x: 2, y: 16500, label: "2" },
    { x: 3, y: 14250, label: "3" },
    { x: 4, y: 19000, label: "4" },
  ];
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
        labels={({ datum }) => datum.x}
      />
      <VictoryScatter
        data={data}
        style={{
          data: {
            fill: "#c43a31",
          },
        }}
        labels={({ data }: { data: Data }) =>
          `${data.label} / ${data.x} & ${data.y}`
        }
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
}

export function RadarChart() {
  const data = [
    { x: 1, y: 13000, label: "1" },
    { x: 2, y: 16500, label: "2" },
    { x: 3, y: 14250, label: "3" },
    { x: 4, y: 19000, label: "4" },
  ];

  return (
    <VictoryChart polar theme={VictoryTheme.material}>
      <VictoryArea data={data} />
      <VictoryPolarAxis />
    </VictoryChart>
  );
}

export function PieChart() {
  return (
    <VictoryPie
      data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 },
      ]}
      colorScale={["red", "orange", "green"]}
      // labelComponent={<VictoryTooltip />}
    />
  );
}

export default function Victory() {
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
