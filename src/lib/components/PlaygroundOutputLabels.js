import React from "react";
import ReactApexChart from "react-apexcharts";

function PlaygroundOutputLabels({ categories, prob }) {
  const series = [
    {
      data: prob,
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      ></ReactApexChart>
    </div>
  );
}

export default PlaygroundOutputLabels;
