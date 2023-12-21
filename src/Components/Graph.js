import { React, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const count = 6 - data1.length;
      const newData = [...data1];

      for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (100000 - 25000)) + 25000;
        newData.push(num);
      }
      setData1(newData);
    };
    if (data1.length < 6) {
      generateRandomNumbers();
    }
  }, [data1]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const count = 7 - data2.length;
      const newData = [...data2];

      for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (100000 - 25000)) + 25000;
        newData.push(num);
      }
      setData2(newData);
    };
    if (data2.length < 6) {
      generateRandomNumbers();
    }
  }, [data2]);

  const chartData1 = {
    series: [
      {
        data: data1,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        width: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Event",
          "Seattle",
          "Lynwood",
          "Bothell",
          "Mukieto",
          "Edmonds",
        ],
      },
      colors: ["#34c759"],
      title: {
        text: "Revenue for November 2022",
        align: "center",
        style: {
          fontSize: "15px",
          fontStyle: "semi-bold",
        },
      },
    },
  };

  const chartData2 = {
    series: [
      {
        data: data2,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        width: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Service plumbing",
          "Bid work HVAC",
          "Service HVAC",
          "Bid Work Plumbing",
          "HWT Replacement",
          "Maintainence",
          "Material sale",
        ],
      },
      colors: ["#34c759"],
      title: {
        text: "Revenue for November 2022",
        align: "center",
        style: {
          fontSize: "15px",
          fontStyle: "semi-bold",
        },
      },
    },
  };

  return (
    <div className="my-10">
      <div className="border-1">
        <p className="font-semibold text-sm">Revenue by job location</p>
        <div className="grid grid-cols-2 gap-8 mt-5">
          <div className="bg-white shadow-md">
            <ReactApexChart
              options={chartData1.options}
              series={chartData1.series}
              type="bar"
              height={350}
            />
          </div>
          <div className="bg-white shadow-md">
            <ReactApexChart
              options={chartData2.options}
              series={chartData2.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Graph;
