
var options = {
  series: [
    {
      name: "Voltage",
      data: [244.6, 220.5, 225.4, 240.7, 244.9, 230.6,240.7, 226.35, 243.2, 247.5, 239.5 ],
    },
    {
      name: "Unit Kwatt",
      data: [0.05, 1.65, 1.5, 0.8, 0.58, 0.54, 1.19, 1.54, 1.65, .91,1.5],
    },
    {
      name: "Current",
      data: [.966, .943, .929, .942, .916, .993, 1.019, .945, .945, .987, .955],
    },
  ],
  chart: {
    height: 450,
    width: 800,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    width: [5, 7, 5],
    curve: "straight",
    dashArray: [0, 8, 5],
  },
  title: {
    text: "10 Day smonitor the energy consumption of household.",
    align: "left",
  },
  legend: {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - " +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ""
      );
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: [
      "14 nov",
      "15 nov",
      "16 nov",
      "17 nov",
      "18 nov",
      "19 nov",
      "20 nov",
      "21 nov",
      "22 nov",
      "23 nov",
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: "#D0D4CA",
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();






















//     series: [{
//     name: 'Voltage',
//     data: [244.6, 220.5, 225.4, 240.7, 244.9, 230.6,240.7, 226.35, 243.2, 247.5, 239.5 ]

//   }, {
//     name: 'Unit Kwatt',
//     data: [.05, 1.65, 1.5, .8, .58, .54, 1.19,1.54, 1.65, .91 , 1.5]

//   }],
//     chart: {
//     height: 350,
//     type: 'area'
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   xaxis: {
//     type: 'datetime',
//     categories: ["2023-11-14T00:00:00.000Z", "2023-11-15T01:30:00.000Z", "2023-11-16T02:30:00.000Z", "2023-11-17T03:30:00.000Z", "2023-11-18T04:30:00.000Z", "2023-11-19T05:30:00.000Z", "2023-11-20T06:30:00.000Z" ,"2023-11-21T07:30:00.000Z","2023-11-22T06:30:00.000Z", "2023-11-23T06:30:00.000Z"]
//   },
//   tooltip: {
//     x: {
//       format: 'dd/MM/yy HH:mm'
//     },
//   },
//   };
//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();






// var options = {
//   series: [
//     {
//         name: "Voltage",
//         data: [244.6, 220.5, 225.4, 240.7, 244.9, 230.6, 240.7, 226.35, 243.2, 247.5, 239.5],
//     },
//     {
//         name: 'Unit Kwatt',
//         data: [.05, 1.65, 1.5, .8, .58, .54, 1.19,1.54, 1.65, .91 , 1.5],
//     },
//     {
//         name: "Current",
//               data: [.966, .943, .929, .942, .916, .993, 1.019, .945, .945, .945],
//     }
//   ],
//   chart: {
//     height: 350,
//     type: "line",
//     dropShadow: {
//       enabled: true,
//       color: "#000",
//       top: 18,
//       left: 7,
//       blur: 10,
//       opacity: 0.2,
//     },
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#77B6EA", "#545454", "#000000"],
//   dataLabels: {
//     enabled: true,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   title: {
//     text: "Iot Base real-time Energy Monitoring & Dashboard Development",
//     align: "left",
//   },
//   grid: {
//     borderColor: "#e7e7e7",
//     row: {
//       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//       opacity: 0.5,
//     },
//   },
//   markers: {
//     size: 1,
//   },
//   xaxis: {
//     categories: [   
//           "14 nov",
//           "15 nov",
//           "16 nov",
//           "17 nov",
//           "18 nov",
//           "19 nov",
//           "20 nov",
//           "21 nov",
//           "22 nov",
//           "23 nov",
//         ],
//     title: {
//       text: "Month",
//     },
//   },
//   yaxis: {
//     title: {
//       text: "",
//     },
//     min: 20,
//     max: 340,
//   },
//   legend: {
//     position: "top",
//     horizontalAlign: "right",
//     floating: true,
//     offsetY: -25,
//     offsetX: -5,
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();




