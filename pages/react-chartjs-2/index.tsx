import { Bar, Line, Radar, Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

function BarChart() {
  const data: ChartData<"bar"> = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      // getDatasetAtEvent={(dataset, event) => {
      //   console.log(dataset);
      //   console.log(event);
      // }}
      getElementsAtEvent={(element, event) => {
        console.log(element);
        console.log(event);
      }}
    />
  );
}

function LineChart() {
  const data: ChartData<"line"> = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [
      {
        label: "東京",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
        label: "神奈川",
        data: [4, 15, 21, 5, 10, 1],
        borderWidth: 1,
        borderColor: "green",
      },
      {
        label: "群馬",
        data: [200, 100, 30, 100, 120, 80],
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: "red",
        pointBorderColor: "red",
        pointBackgroundColor: "red",
        pointHoverBackgroundColor: "cyan",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    showLine: true,
    scales: {
      x: {
        // title: {
        //   display: boolean;
        //   text: string | string[];
        //   color: Color;
        //   font: FontSpec;
        //   padding: number | {
        //     top: number;
        //     bottom: number;
        //   };
        // };
        ticks: {
          color: "green",
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "あいー",
          font: {
            size: 30,
          },
        },
        ticks: {
          font: {
            size: 30,
          },
          callback: function (value, index, values) {
            return value + "人";
          },
        },
      },
    },
    plugins: {
      title: {
        text: "感染者数",
        display: true,
        font: {
          size: 20,
        },
      },
      legend: {
        labels: {
          font: {
            size: 24,
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

function RadarChart() {
  const data: ChartData<"radar"> = {
    labels: [
      "やる気",
      "だるさ",
      "腰が重い",
      "重いものを持てる",
      "免許持ってる",
      "遠い",
    ],
    datasets: [
      {
        label: "東京",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: "rgba(0, 0, 255, 0.5)",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
      {
        label: "神奈川",
        data: [4, 15, 21, 5, 10, 1],
        borderWidth: 1,
        borderColor: "rgba(0, 255, 0, 0.5)",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
      },
      {
        label: "群馬",
        data: [40, 20, 10, 21, 8, 2],
        borderWidth: 1,
        borderColor: "rgba(255, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      r: {
        ticks: {
          font: {
            size: 16,
          },
        },
        pointLabels: {
          color: "red",
          font: {
            size: 24,
            weight: "bold",
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}

function PieChart() {
  const data: ChartData<"pie"> = {
    labels: [
      "やる気",
      "だるさ",
      "腰が重い",
      "重いものを持てる",
      "免許持ってる",
      "遠い",
    ],
    datasets: [
      {
        label: "群馬",
        data: [40, 20, 10, 21, 8, 2],
        borderWidth: 0,
        backgroundColor: ["red", "yellow", "blue", "green", "orange", "pink"],
      },
    ],
  };

  return <Pie data={data} />;
}

export default function ReactChartjs2Page() {
  return (
    <>
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
    </>
  );
}
