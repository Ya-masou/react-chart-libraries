import { Box, AspectRatio } from "@chakra-ui/react"
import { ResponsiveBar, Bar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveRadar } from "@nivo/radar";
import { ResponsivePie, Pie } from "@nivo/pie";
import { ResponsiveHeatMap } from "@nivo/heatmap"

function BarChart() {
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
    <Box maxW="800px" h="lg">
      <h2>Bar Chart</h2>
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
    </Box>
  );
}

function LineChart() {
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
    <Box maxW="800px" h="lg">
      <h2>Line Chart</h2>
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
    </Box>
  );
}

function RadarChart() {
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
    <Box maxW="800px">
      <h2>Rader Chart</h2>
      <AspectRatio ratio={16 / 9}>
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
      </AspectRatio>
    </Box>
  );
}

function PieChart() {
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
    <Box maxW="800px">
      <h2>Pie Chart</h2>
      <AspectRatio ratio={16 / 9}>
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
      </AspectRatio>
    </Box>
  );
}

function HeatMapChart() {
  const data = [
    {
      "country": "AD",
      "hot dog": 5,
      "hot dogColor": "hsl(209, 70%, 50%)",
      "burger": 15,
      "burgerColor": "hsl(348, 70%, 50%)",
      "sandwich": 70,
      "sandwichColor": "hsl(131, 70%, 50%)",
      "kebab": 43,
      "kebabColor": "hsl(139, 70%, 50%)",
      "fries": 7,
      "friesColor": "hsl(269, 70%, 50%)",
      "donut": 61,
      "donutColor": "hsl(30, 70%, 50%)",
      "junk": 70,
      "junkColor": "hsl(42, 70%, 50%)",
      "sushi": 8,
      "sushiColor": "hsl(300, 70%, 50%)",
      "ramen": 75,
      "ramenColor": "hsl(259, 70%, 50%)",
      "curry": 48,
      "curryColor": "hsl(341, 70%, 50%)",
      "udon": 70,
      "udonColor": "hsl(156, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 42,
      "hot dogColor": "hsl(197, 70%, 50%)",
      "burger": 79,
      "burgerColor": "hsl(270, 70%, 50%)",
      "sandwich": 67,
      "sandwichColor": "hsl(194, 70%, 50%)",
      "kebab": 0,
      "kebabColor": "hsl(260, 70%, 50%)",
      "fries": 27,
      "friesColor": "hsl(87, 70%, 50%)",
      "donut": 83,
      "donutColor": "hsl(331, 70%, 50%)",
      "junk": 12,
      "junkColor": "hsl(193, 70%, 50%)",
      "sushi": 77,
      "sushiColor": "hsl(252, 70%, 50%)",
      "ramen": 36,
      "ramenColor": "hsl(313, 70%, 50%)",
      "curry": 63,
      "curryColor": "hsl(305, 70%, 50%)",
      "udon": 100,
      "udonColor": "hsl(155, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 75,
      "hot dogColor": "hsl(278, 70%, 50%)",
      "burger": 65,
      "burgerColor": "hsl(226, 70%, 50%)",
      "sandwich": 77,
      "sandwichColor": "hsl(85, 70%, 50%)",
      "kebab": 96,
      "kebabColor": "hsl(51, 70%, 50%)",
      "fries": 92,
      "friesColor": "hsl(333, 70%, 50%)",
      "donut": 84,
      "donutColor": "hsl(2, 70%, 50%)",
      "junk": 30,
      "junkColor": "hsl(109, 70%, 50%)",
      "sushi": 24,
      "sushiColor": "hsl(138, 70%, 50%)",
      "ramen": 80,
      "ramenColor": "hsl(336, 70%, 50%)",
      "curry": 86,
      "curryColor": "hsl(54, 70%, 50%)",
      "udon": 20,
      "udonColor": "hsl(70, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 71,
      "hot dogColor": "hsl(341, 70%, 50%)",
      "burger": 9,
      "burgerColor": "hsl(346, 70%, 50%)",
      "sandwich": 11,
      "sandwichColor": "hsl(108, 70%, 50%)",
      "kebab": 81,
      "kebabColor": "hsl(66, 70%, 50%)",
      "fries": 7,
      "friesColor": "hsl(287, 70%, 50%)",
      "donut": 86,
      "donutColor": "hsl(107, 70%, 50%)",
      "junk": 85,
      "junkColor": "hsl(57, 70%, 50%)",
      "sushi": 99,
      "sushiColor": "hsl(74, 70%, 50%)",
      "ramen": 30,
      "ramenColor": "hsl(140, 70%, 50%)",
      "curry": 12,
      "curryColor": "hsl(96, 70%, 50%)",
      "udon": 19,
      "udonColor": "hsl(175, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 22,
      "hot dogColor": "hsl(73, 70%, 50%)",
      "burger": 23,
      "burgerColor": "hsl(292, 70%, 50%)",
      "sandwich": 83,
      "sandwichColor": "hsl(41, 70%, 50%)",
      "kebab": 9,
      "kebabColor": "hsl(281, 70%, 50%)",
      "fries": 83,
      "friesColor": "hsl(34, 70%, 50%)",
      "donut": 48,
      "donutColor": "hsl(120, 70%, 50%)",
      "junk": 30,
      "junkColor": "hsl(135, 70%, 50%)",
      "sushi": 71,
      "sushiColor": "hsl(166, 70%, 50%)",
      "ramen": 38,
      "ramenColor": "hsl(220, 70%, 50%)",
      "curry": 74,
      "curryColor": "hsl(187, 70%, 50%)",
      "udon": 24,
      "udonColor": "hsl(288, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 91,
      "hot dogColor": "hsl(168, 70%, 50%)",
      "burger": 83,
      "burgerColor": "hsl(135, 70%, 50%)",
      "sandwich": 25,
      "sandwichColor": "hsl(209, 70%, 50%)",
      "kebab": 68,
      "kebabColor": "hsl(177, 70%, 50%)",
      "fries": 96,
      "friesColor": "hsl(353, 70%, 50%)",
      "donut": 85,
      "donutColor": "hsl(81, 70%, 50%)",
      "junk": 7,
      "junkColor": "hsl(85, 70%, 50%)",
      "sushi": 87,
      "sushiColor": "hsl(278, 70%, 50%)",
      "ramen": 69,
      "ramenColor": "hsl(148, 70%, 50%)",
      "curry": 54,
      "curryColor": "hsl(265, 70%, 50%)",
      "udon": 42,
      "udonColor": "hsl(291, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 14,
      "hot dogColor": "hsl(64, 70%, 50%)",
      "burger": 12,
      "burgerColor": "hsl(272, 70%, 50%)",
      "sandwich": 91,
      "sandwichColor": "hsl(137, 70%, 50%)",
      "kebab": 76,
      "kebabColor": "hsl(184, 70%, 50%)",
      "fries": 16,
      "friesColor": "hsl(330, 70%, 50%)",
      "donut": 14,
      "donutColor": "hsl(264, 70%, 50%)",
      "junk": 68,
      "junkColor": "hsl(21, 70%, 50%)",
      "sushi": 77,
      "sushiColor": "hsl(279, 70%, 50%)",
      "ramen": 48,
      "ramenColor": "hsl(5, 70%, 50%)",
      "curry": 8,
      "curryColor": "hsl(358, 70%, 50%)",
      "udon": 49,
      "udonColor": "hsl(312, 70%, 50%)"
    },
    {
      "country": "AO",
      "hot dog": 68,
      "hot dogColor": "hsl(289, 70%, 50%)",
      "burger": 80,
      "burgerColor": "hsl(59, 70%, 50%)",
      "sandwich": 64,
      "sandwichColor": "hsl(105, 70%, 50%)",
      "kebab": 37,
      "kebabColor": "hsl(127, 70%, 50%)",
      "fries": 72,
      "friesColor": "hsl(330, 70%, 50%)",
      "donut": 34,
      "donutColor": "hsl(330, 70%, 50%)",
      "junk": 67,
      "junkColor": "hsl(149, 70%, 50%)",
      "sushi": 82,
      "sushiColor": "hsl(286, 70%, 50%)",
      "ramen": 12,
      "ramenColor": "hsl(29, 70%, 50%)",
      "curry": 9,
      "curryColor": "hsl(1, 70%, 50%)",
      "udon": 13,
      "udonColor": "hsl(125, 70%, 50%)"
    },
    {
      "country": "AQ",
      "hot dog": 90,
      "hot dogColor": "hsl(108, 70%, 50%)",
      "burger": 47,
      "burgerColor": "hsl(221, 70%, 50%)",
      "sandwich": 99,
      "sandwichColor": "hsl(249, 70%, 50%)",
      "kebab": 14,
      "kebabColor": "hsl(10, 70%, 50%)",
      "fries": 80,
      "friesColor": "hsl(342, 70%, 50%)",
      "donut": 36,
      "donutColor": "hsl(183, 70%, 50%)",
      "junk": 88,
      "junkColor": "hsl(208, 70%, 50%)",
      "sushi": 53,
      "sushiColor": "hsl(33, 70%, 50%)",
      "ramen": 30,
      "ramenColor": "hsl(58, 70%, 50%)",
      "curry": 90,
      "curryColor": "hsl(98, 70%, 50%)",
      "udon": 91,
      "udonColor": "hsl(349, 70%, 50%)"
    }
  ]
  return (
    <Box maxW="800px" h="lg">
      <h2>HeatMap Chart</h2>
      <ResponsiveHeatMap
          data={data}
          keys={[
              'hot dog',
              'burger',
              'sandwich',
              'kebab',
              'fries',
              'donut',
              'junk',
              'sushi',
              'ramen',
              'curry',
              'udon'
          ]}
          indexBy="country"
          margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
          forceSquare={true}
          padding={5}
          axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
          axisRight={null}
          axisBottom={null}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'country',
              legendPosition: 'middle',
              legendOffset: -40
          }}
          cellOpacity={1}
          cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
          defs={[
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(0, 0, 0, 0.1)',
                  rotation: -45,
                  lineWidth: 4,
                  spacing: 7
              }
          ]}
          fill={[ { id: 'lines' } ]}
          animate={true}
          motionConfig="wobbly"
          motionStiffness={80}
          motionDamping={9}
          hoverTarget="cell"
          cellHoverOthersOpacity={0.25}
      />
    </Box>
  )
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
      <hr />
      <HeatMapChart />
    </main>
  );
}
