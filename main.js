// charts

var graph = document.getElementById('chart1');

var myChart = new Chart(graph, {
   type: 'pie',
   data: {
       labels: ['Moderately', 'Very', 'Not very', 'Not at all'],
       datasets: [{
           backgroundColor: [
               "#C0FF7D",
               "#7DFFBC",
               "#7DAFFF",
               "#AF7DFF",
           ],
       data: [45, 22, 16, 16]
      }]
   }, // ends data
   options: {
       responsive: true,
       cutoutPercentage: 30,
       title: {
           display: true,
           text: "Americans' Interest in Global Warming"
       }
   } // ends options
}); // ends the entire variable

var graph = document.getElementById('chart2');

var myChart = new Chart(graph, {
   type: 'line',
   data: {
       labels: ['11/08', '1/10', '6/10', '5/11', '11/11', '3/12', '9/12', '4/13', '11/13', '4/14', '10/14', '3/15', '10/15', '3/16'],
       datasets: [{
           label: 'Occassionally/Often',
           data: [40, 34, 35, 30, 30, 29, 29, 33, 27, 32, 27, 36, 35, 31],
           backgroundColor: "#7DFFBC"
       }, {
           label: 'Rarely/Never',
           data: [60, 64, 64, 69, 68, 70, 71, 67, 73, 68, 73, 74, 65, 69],
           backgroundColor: "#AF7DFF"
       }]
   },
   options: {
     responsive: true,
     title: {
        display: true,
        text: "Americans' Discussion of Global Warming"
     }
 } // ends options
}); // ends the entire variable
