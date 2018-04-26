// var Chart = require('chart.js');

let ctx = document.getElementById("bldgMoneyChart1").getContext('2d');
let bldgMoneyChart1 = new Chart(ctx, {
type: 'bar',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner", "Center for the Arts", "Center for Tomorrow", "North Child Care", "Clemens Hall", "CNG Pumps", "Computing Center", "Cooke & Hochstetter Complex", "Creekside Village", "Crofts Hall", "Davis Hall", "Dorsheimer Greenhouse", "Fargo" , "Millard Fillmore Academic Core", "Flint Village",
            "Fronczak Hall", "Furnas Hall", "Governors","Greiner","Hadley Village","Helm","Human Resource Department","Jacobs & Alfeiro Ctr","Jarvis","Ketter","Knox","Lockwood","Mail Center","Math Building","North Chemical Storage","NSC","Obrian","Park Hall","Porter", "Richmond", "Red Jacket", "Slee", "South Lake","Spine:Capen,Norton,Talbert","Spaulding","UB Stadium","Statler","UB North St lights & Lighting Loop", "Student Union", "Wilkeson"   ],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.8153, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52, 448134.77, 38612.73, 18010.19, 171590.57, 12306.30, 51814.44, 1064762.05, 83581.09, 159865.07, 390459.76, 70889.72, 265760.50, 448377.60, 151957.93,
            342637.76 , 461495.00 , 518653.16, 186846.54 , 187909.08, 71979.48, 5217.98 , 101361.42 , 173393.15,  162615.95, 70896.99,  346624.07, 10408.86 , 29712.39  , 21825.45, 1094048.42  , 179933.67 , 263296.79, 277436.93, 351203.44, 416188.21,  65370.73, 185602.87, 918716.11  , 289391.87  , 137836.49  , 238059.06 ,100710.41 ,   216156.36,  258931.13    ],
    //data: [710250, 175047, 332302, 221077, 135152],
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
  }]
},
options: {

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
type: 'line',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner"],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.82, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52],
    //data: [710250, 175047, 332302, 221077, 135152],
    backgroundColor: [
      // 'rgba(255, 99, 132, 0.2)',
      // 'rgba(54, 162, 235, 0.2)',
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
      // 'rgba(255,99,132,1)',
      // 'rgba(54, 162, 235, 1)',
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
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});

let ctxxx = document.getElementById("bldgMoneyChart3").getContext('2d');
let bldgMoneyChart3 = new Chart(ctxxx, {
type: 'line',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner"],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.82, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52],
    //data: [710250, 175047, 332302, 221077, 135152],
    backgroundColor: [
      // 'rgba(255, 99, 132, 0.2)',
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
      // 'rgba(255,99,132,1)',
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
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});

let ctxxxx = document.getElementById("bldgMoneyChart4").getContext('2d');
let bldgMoneyChart4 = new Chart(ctxxxx, {
type: 'polarArea',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner"],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.82, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52],
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
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});

let ctxxxxx = document.getElementById("bldgMoneyChart5").getContext('2d');
let bldgMoneyChart5 = new Chart(ctxxxxx, {
type: 'bar',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner"],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.82, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52],
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
type: 'radar',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner"],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.82, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52],
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
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}
});


let ct7 = document.getElementById("bldgMoneyChart7").getContext('2d');
var bldgMoneyChart7 = new Chart(ct7, {
  type: 'Doughnut',
  data: {
      datasets: [{
          data: [10, 20, 30]
      }],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
});
