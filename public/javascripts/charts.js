// var Chart = require('chart.js');

let ctx = document.getElementById("bldgMoneyChart1").getContext('2d');
let bldgMoneyChart1 = new Chart(ctx, {
type: 'bar',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner", "Center for the Arts", "Center for Tomorrow", "North Child Care", "Clemens Hall", "CNG Pumps", "Computing Center", "Cooke & Hochstetter Complex", "Creekside Village", "Crofts Hall", "Davis Hall", "Dorsheimer Greenhouse", "Fargo" , "Millard Fillmore Academic Core", "Flint Village",
            "Fronczak Hall", "Furnas Hall", "Governors","Greiner","Hadley Village","Helm","Human Resource Department","Jacobs & Alfeiro Ctr","Jarvis","Ketter","Knox","Lockwood","Mail Center","Math Building","North Chemical Storage","NSC","Obrian","Park Hall","Porter", "Richmond", "Red Jacket", "Slee", "South Lake","Spine: Capen,Norton,Talbert","Spaulding","UB Stadium","Statler","UB North St lights & Lighting Loop", "Student Union", "Wilkeson"   ],
  datasets: [{
    label: 'Annual Energy Cost: Gas+Electric (USD)',
    data: [710249.8153, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52, 448134.77, 38612.73, 18010.19, 171590.57, 12306.30, 51814.44, 1064762.05, 83581.09, 159865.07, 390459.76, 70889.72, 265760.50, 448377.60, 151957.93,
            342637.76 , 461495.00 , 518653.16, 186846.54 , 187909.08, 71979.48, 5217.98 , 101361.42 , 173393.15,  162615.95, 70896.99,  346624.07, 10408.86 , 29712.39  , 21825.45, 1094048.42  , 179933.67 , 263296.79, 277436.93, 351203.44, 416188.21,  65370.73, 185602.87, 918716.11  , 289391.87  , 137836.49  , 238059.06 ,100710.41 ,   216156.36,  258931.13    ],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)'
  ],
    borderWidth: 1
  },
  {
    label: 'Natural Gas (USD)',
    data: [32650.66,0,0,0,0,0,3174.90,22987.24,153315.36,1176.99,2248.31,0,10313.04,0,94274.38,42890.53,0,28549.43,2803.06,15894.42,35962.67,41115.53,0,133606.12,38948.84,61656.74,35620.51,23642.56,0,6783.82,0,5974.87,0,0,5580.19,7308.39,12968,443311.6,44737.67,0,17783.63,28791.72,49588.10,0,49662.85,21737.4,400.87,30385.15,18795.47,0,45775.52,16065.94  ],
    // backgroundColor: [
    //   'rgba(161, 161, 161, 0.2)'
    // ],
    // borderColor: [
    //   'rgba(161, 161, 161, 0.2)'
    // ],

    // Changes this dataset to become a line
    type: 'line'
  }]
},
options: {
  title: {
           display: true,
           text: 'North Campus 2013-14'
       },

  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});

//var Chart = require('chart.js');
let ctxx = document.getElementById("bldgMoneyChart2").getContext('2d');
let bldgMoneyChart2 = new Chart(ctxx, {
type: 'bar',
data: {
  labels: [ "Creekside",  "Fargo" ,"Flint",
             "Governors","Greiner","Hadley","Porter", "Richmond", "Red Jacket",  "South Lake","Spaulding", "Wilkeson"   ],
  datasets: [{
    label: 'Annual Energy Cost (USD)',
    data: [ 83581.09, 265760.50, 151957.93,
           518653.16, 186846.54 , 187909.08, 277436.93, 351203.44, 416188.21, 185602.87, 289391.87  , 258931.13    ],
    //data: [710250, 175047, 332302, 221077, 135152],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
        ],
    borderColor: [
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
    ],
    borderWidth: 1
  },{
    label: 'Natural Gas (USD)',
    data:[ 42890.53,15894.42,41115.53,38948.84,61656.74,35620.51,17783.63,28791.72,49588.10,49662.85,400.87,16065.94],
    // backgroundColor: [
    //   'rgba(161, 161, 161, 0.2)'
    // ],
    // borderColor: [
    //   'rgba(161, 161, 161, 0.2)'
    // ],

    // Changes this dataset to become a line
    type: 'line'
  }]
},
options: {
  title: {
           display: true,
           text: 'Residence Halls 2013-14'
       },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});

// let ctxxx = document.getElementById("bldgMoneyChart3").getContext('2d');
// let bldgMoneyChart3 = new Chart(ctxxx, {
// type: 'line',
// data: {
//   labels: [ "Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun",],
//   datasets: [{
//     label: 'Actual',
//     data: [ 8225.43, 9235.12,30085.06,22939.35,40672.93,42840.10,102268.08,79625.52,74012.25,39737.05,24108.08,5955.33],
//     // backgroundColor: [
//     //   'rgba(255, 99, 132, 0.2)'
//     // borderColor: [
//     //   'rgba(255, 99, 132, 0.2)'   ],
//     borderWidth: 1
//   }]
// },
// options: {
//   title: {
//            display: true,
//            text: 'Governors Electricity Cost (USD) 2013-14'
//        },
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero:true
//       }
//     }]
//   }
// }
// });

// let ctxxxx = document.getElementById("bldgMoneyChart4").getContext('2d');
// let bldgMoneyChart4 = new Chart(ctxxxx, {
// type: 'radar',
// data: {
//   labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner"],
//   datasets: [{
//     label: 'Annual Energy Cost (USD)',
//     data: [710249.82, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52],
//     //data: [710250, 175047, 332302, 221077, 135152],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)'
//     ],
//     borderColor: [
//       'rgba(255,99,132,1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)',
//       'rgba(255,99,132,1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)'
//     ],
//     borderWidth: 1
//   }]
// },
// options: {
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero:true
//       }
//     }]
//   }
// }
// });

let ctxxxxx = document.getElementById("bldgMoneyChart5").getContext('2d');
let bldgMoneyChart5 = new Chart(ctxxxxx, {
type: 'polarArea',
data: {
  labels: ["NSC","Cooke & Hochstetter Complex","Alumni", "Spine: Capen,Norton,Talbert", "Cold Water Plant"  ],
  datasets: [{
    label: 'Annual Energy Cost (USD)',
    data: [1094048.42, 1064762.05, 710249.81, 918716.11, 698843.38   ],
    //data: [710250, 175047, 332302, 221077, 135152],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
},
options: {

    title: {
             display: true,
             text: 'The Big Five 2013-14'
         },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});


let ct6 = document.getElementById("bldgMoneyChart6").getContext('2d');
let bldgMoneyChart6 = new Chart(ct6, {
type: 'bar',
data: {
  labels: [ "Abbott Hall", "Acheson Annex", "Allen Hall", "Biomed Education Building", "Biomed Research Building", "Buffalo Materials Research Centre", "Carry Hall", "South Child Care", "Clark Hall", "Clement Hall", "Crosby Hall", "Dief Annex", "Diefendorf Hall", "Farber Hall", "Foster Hall", "Garage", "Goodyear Hall", "Harriman Hall", "Hayes Hall" , "Hayes Annex A,B,C", "Hayes D",
            "Howe Research", "Kapoor Hall", "Kimball Tower","MacKay Heating Plant","MacDonald Hall","Michael Hall","Parker Hall","Pritchard Hall","South Lt Loop & Parking lights","Schoellkopf Hall","Sherman Hall","Squire Hall","Wende Hall","SC Water Pump Station","Service Building"],
  datasets: [{
    label: 'Annual Energy Cost: Gas+Electric (USD)',
    data: [80796.03,7623.40,24070.75,437727.38,636420.26,46072.43,126562.67,40997.09,23587.03,72875.86,18290.09,12945.00,40141.02,234570.33,120071.38,197.37,132052.55,30638.87,31358.51,27079.84,94980.85,14907.43,290809.45,130312.58,1671012.92,984.62,4018.16,172118.06,2678.25,48772.71,426.83,89214.92,257186.66,38351.72,28883.84,26717.91],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)',
      'rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)'
  ],
    borderWidth: 1
  },
  {
    label: 'Natural Gas (USD)',
    data: [0,0,87.02,0,96.31,0,0,7670.45,0,0,429.16,0,454.31,45780.11,52.50,197.37,7923.34,0,24808.98,0,0,3.89,0,807.77,1618164.30,0,297.51,71.27,0,0,0,0,741.03,424.37,2611.41,0],
    // backgroundColor: [
    //   'rgba(161, 161, 161, 0.2)'
    // ],
    // borderColor: [
    //   'rgba(161, 161, 161, 0.2)'
    // ],

    // Changes this dataset to become a line
    type: 'line'
  }]
},
options: {
  title: {
           display: true,
           text: 'South Campus 2013-14'
       },

  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});
