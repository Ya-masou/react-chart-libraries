// import Chart from "react-apexcharts";
import { useMemo } from "react";
import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// https://nextjs.org/docs/advanced-features/dynamic-import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function BarChart() {
  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      height: "800px",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series: ApexOptions["series"] = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 8],
      type: "line",
      color: "rgba(255, 0, 0, 0.2)",
    },
    {
      name: "series-2",
      data: [20, 10, 40, 19, 30, 30, 20, 100, 80],
      type: "bar",
    },
  ];

  return <Chart series={series} options={options} />;
}

function LineChart() {
  const options: ApexOptions = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
      animations: {
        easing: "linear",
        speed: 200,
        animateGradually: {
          enabled: false,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 200,
        },
      },
      zoom: {
        enabled: false,
      },
    },
    yaxis: {
      showAlways: true,
      max: (max) => max + 10,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series: ApexOptions["series"] = [
    {
      // name: "series-1",
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 8],
      type: "line",
    },
    {
      name: "series-2",
      data: [20, 10, 40, 19, 30, 30, 20, 100, 80],
    },
  ];

  return <Chart series={series} options={options} type="line" />;
}

function RadarChart() {
  const series: ApexOptions["series"] = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: "Radar Chart - Multi Series",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
    yaxis: {
      min: 0,
      showAlways: true,
    },
  };

  return <Chart series={series} options={options} type="radar" />;
}

function PieChart() {
  const options: ApexOptions = {
    chart: {
      id: "basic-pie",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    title: {
      text: "ϵ( 'Θ' )϶",
      align: "center",
    },
    // xaxis: {
    //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    // },
    // dataLabels: {
    //   enabled: false,
    // },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    colors: ["black", "cyan", "magenta", "yellow", "blue"],
    dataLabels: {
      style: {
        colors: ["black", "cyan", "magenta", "yellow", "blue"],
      },
    },
    stroke: {
      colors: ["black", "cyan", "magenta", "yellow", "blue"],
    },
    fill: {
      colors: [
        "#F44336",
        "#E91E63",
        "green",
        "hsl(210, 100%, 80%)",
        "rgba(255, 0, 0, 0.1)",
      ],
    },
  };

  const series: ApexOptions["series"] = [44, 55, 13, 43, 22];

  return <Chart series={series} options={options} type="pie" />;
}

export default function Apex() {
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
