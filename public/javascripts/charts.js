<<<<<<< HEAD
// var Chart = require('chart.js');

let ctx = document.getElementById("bldgMoneyChart1").getContext('2d');
let bldgMoneyChart1 = new Chart(ctx, {
=======
//var Chart = require('chart.js');

//const fs = require('fs');
//let fString = fs.readFileSync('/home/brett/websites/rccapp/data/out.json');
//let obj = JSON.parse(fString);
//let lumTot = parseFloat(obj["buildings"]["ALUMNI ARENA"]["Total"]);

let ctx = document.getElementById("bldgMoneyChart").getContext('2d');
let bldgMoneyChart = new Chart(ctx, {
>>>>>>> 5bb65f62276cc10c5e970bba6dcace0692580a65
type: 'bar',
data: {
  labels: ["Alumni", "Baird", "Cold Water Plant", "Baldy", "John Beane Center", "Bell", "Bissell", "Bonner", "Center for the Arts", "Center for Tomorrow", "North Child Care", "Clemens Hall", "CNG Pumps", "Computing Center"],
  datasets: [{
    label: 'Annual Energy Cost',
    data: [710249.8153, 175046.66, 698843.38, 332301.95, 104673.20, 221076.73, 16246.27, 135151.52, 448134.77, 38612.73, 18010.19, 171590.57, 12306.30, 51814.44  ],
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
      'rgba(153, 102, 255, 1)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
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

let ctxxx = document.getElementById("bldgMoneyChart3").getContext('2d');
let bldgMoneyChart3 = new Chart(ctxxx, {
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

let ctxxxx = document.getElementById("bldgMoneyChart4").getContext('2d');
let bldgMoneyChart4 = new Chart(ctxxxx, {
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
var bldgMoneyChart6 = new Chart(ct6, {
  type: 'doughnut',
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
