//var Chart = require('chart.js');
let ctx = document.getElementById("bldgMoneyChart").getContext('2d');
let bldgMoneyChart = new Chart(ctx, {
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
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
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
