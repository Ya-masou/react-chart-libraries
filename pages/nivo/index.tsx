import { ResponsiveBar, Bar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveRadar } from "@nivo/radar";
import { ResponsivePie, Pie } from "@nivo/pie";

export function BarChart() {
  const data = [
    {
      country: "AD",
      "hot dog": 41,
      "hot dogColor": "hsl(337, 70%, 50%)",
      burger: 114,
      burgerColor: "hsl(243, 70%, 50%)",
      sandwich: 77,
      sandwichColor: "hsl(55, 70%, 50%)",
      kebab: 62,
      kebabColor: "hsl(253, 70%, 50%)",
      fries: 188,
      friesColor: "hsl(119, 70%, 50%)",
      donut: 152,
      donutColor: "hsl(297, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 198,
      "hot dogColor": "hsl(97, 70%, 50%)",
      burger: 59,
      burgerColor: "hsl(359, 70%, 50%)",
      sandwich: 53,
      sandwichColor: "hsl(333, 70%, 50%)",
      kebab: 93,
      kebabColor: "hsl(43, 70%, 50%)",
      fries: 176,
      friesColor: "hsl(357, 70%, 50%)",
      donut: 77,
      donutColor: "hsl(174, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 109,
      "hot dogColor": "hsl(333, 70%, 50%)",
      burger: 14,
      burgerColor: "hsl(56, 70%, 50%)",
      sandwich: 13,
      sandwichColor: "hsl(288, 70%, 50%)",
      kebab: 132,
      kebabColor: "hsl(230, 70%, 50%)",
      fries: 132,
      friesColor: "hsl(311, 70%, 50%)",
      donut: 2,
      donutColor: "hsl(327, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 103,
      "hot dogColor": "hsl(316, 70%, 50%)",
      burger: 17,
      burgerColor: "hsl(18, 70%, 50%)",
      sandwich: 2,
      sandwichColor: "hsl(347, 70%, 50%)",
      kebab: 182,
      kebabColor: "hsl(297, 70%, 50%)",
      fries: 13,
      friesColor: "hsl(142, 70%, 50%)",
      donut: 153,
      donutColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 35,
      "hot dogColor": "hsl(129, 70%, 50%)",
      burger: 186,
      burgerColor: "hsl(331, 70%, 50%)",
      sandwich: 174,
      sandwichColor: "hsl(351, 70%, 50%)",
      kebab: 56,
      kebabColor: "hsl(170, 70%, 50%)",
      fries: 54,
      friesColor: "hsl(4, 70%, 50%)",
      donut: 118,
      donutColor: "hsl(169, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 184,
      "hot dogColor": "hsl(166, 70%, 50%)",
      burger: 176,
      burgerColor: "hsl(33, 70%, 50%)",
      sandwich: 161,
      sandwichColor: "hsl(102, 70%, 50%)",
      kebab: 152,
      kebabColor: "hsl(180, 70%, 50%)",
      fries: 173,
      friesColor: "hsl(27, 70%, 50%)",
      donut: 21,
      donutColor: "hsl(42, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 106,
      "hot dogColor": "hsl(204, 70%, 50%)",
      burger: 28,
      burgerColor: "hsl(46, 70%, 50%)",
      sandwich: 91,
      sandwichColor: "hsl(120, 70%, 50%)",
      kebab: 62,
      kebabColor: "hsl(74, 70%, 50%)",
      fries: 45,
      friesColor: "hsl(99, 70%, 50%)",
      donut: 139,
      donutColor: "hsl(346, 70%, 50%)",
    },
  ];

  return (
    <div
      style={{
        aspectRatio: "16 / 9", // safari これ使えない
      }}
    >
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        valueFormat={{ format: "", enabled: false }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export function LineChart() {
  const data = [
    {
      id: "japan",
      color: "hsl(351, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 20,
        },
        {
          x: "helicopter",
          y: 70,
        },
        {
          x: "boat",
          y: 248,
        },
        {
          x: "train",
          y: 81,
        },
        {
          x: "subway",
          y: 100,
        },
        {
          x: "bus",
          y: 209,
        },
        {
          x: "car",
          y: 79,
        },
        {
          x: "moto",
          y: 69,
        },
        {
          x: "bicycle",
          y: 111,
        },
        {
          x: "horse",
          y: 169,
        },
        {
          x: "skateboard",
          y: 220,
        },
        {
          x: "others",
          y: 293,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(36, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 86,
        },
        {
          x: "helicopter",
          y: 121,
        },
        {
          x: "boat",
          y: 127,
        },
        {
          x: "train",
          y: 169,
        },
        {
          x: "subway",
          y: 100,
        },
        {
          x: "bus",
          y: 207,
        },
        {
          x: "car",
          y: 122,
        },
        {
          x: "moto",
          y: 187,
        },
        {
          x: "bicycle",
          y: 264,
        },
        {
          x: "horse",
          y: 299,
        },
        {
          x: "skateboard",
          y: 185,
        },
        {
          x: "others",
          y: 278,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(184, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 151,
        },
        {
          x: "helicopter",
          y: 20,
        },
        {
          x: "boat",
          y: 177,
        },
        {
          x: "train",
          y: 209,
        },
        {
          x: "subway",
          y: 225,
        },
        {
          x: "bus",
          y: 36,
        },
        {
          x: "car",
          y: 154,
        },
        {
          x: "moto",
          y: 214,
        },
        {
          x: "bicycle",
          y: 290,
        },
        {
          x: "horse",
          y: 96,
        },
        {
          x: "skateboard",
          y: 55,
        },
        {
          x: "others",
          y: 131,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(274, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 33,
        },
        {
          x: "helicopter",
          y: 83,
        },
        {
          x: "boat",
          y: 63,
        },
        {
          x: "train",
          y: 47,
        },
        {
          x: "subway",
          y: 185,
        },
        {
          x: "bus",
          y: 130,
        },
        {
          x: "car",
          y: 101,
        },
        {
          x: "moto",
          y: 1,
        },
        {
          x: "bicycle",
          y: 74,
        },
        {
          x: "horse",
          y: 121,
        },
        {
          x: "skateboard",
          y: 77,
        },
        {
          x: "others",
          y: 64,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(179, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 136,
        },
        {
          x: "helicopter",
          y: 190,
        },
        {
          x: "boat",
          y: 112,
        },
        {
          x: "train",
          y: 118,
        },
        {
          x: "subway",
          y: 207,
        },
        {
          x: "bus",
          y: 5,
        },
        {
          x: "car",
          y: 117,
        },
        {
          x: "moto",
          y: 247,
        },
        {
          x: "bicycle",
          y: 217,
        },
        {
          x: "horse",
          y: 151,
        },
        {
          x: "skateboard",
          y: 133,
        },
        {
          x: "others",
          y: 262,
        },
      ],
    },
  ];

  return (
    <div
      style={{
        aspectRatio: "16 / 9",
      }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export function RadarChart() {
  const data = [
    {
      taste: "fruity",
      chardonay: 70,
      carmenere: 90,
      syrah: 50,
    },
    {
      taste: "bitter",
      chardonay: 54,
      carmenere: 54,
      syrah: 54,
    },
    {
      taste: "heavy",
      chardonay: 71,
      carmenere: 76,
      syrah: 33,
    },
    {
      taste: "strong",
      chardonay: 66,
      carmenere: 91,
      syrah: 91,
    },
    {
      taste: "sunny",
      chardonay: 106,
      carmenere: 66,
      syrah: 30,
    },
  ];

  return (
    <div
      style={{
        aspectRatio: "16 / 9",
      }}
    >
      <ResponsiveRadar
        data={data}
        keys={["chardonay", "carmenere", "syrah"]}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color" }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: "nivo" }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export function PieChart() {
  const data = [
    {
      id: "javascript",
      label: "javascript",
      value: 495,
      color: "hsl(264, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 251,
      color: "hsl(28, 70%, 50%)",
    },
    {
      id: "c",
      label: "c",
      value: 331,
      color: "hsl(281, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 441,
      color: "hsl(100, 70%, 50%)",
    },
    {
      id: "hack",
      label: "hack",
      value: 63,
      color: "hsl(296, 70%, 50%)",
    },
  ];

  return (
    <div
      style={{
        aspectRatio: "16 / 9",
      }}
    >
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        // cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default function Nivo() {
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
