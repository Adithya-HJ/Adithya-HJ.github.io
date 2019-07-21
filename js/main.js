window.onload = function () {
    // var chart = new CanvasJS.Chart("lr_plot",
    //     {

    //         title: {
    //             text: "Earthquakes - per month"
    //         },
    //         axisY: {
    //             gridThickness: 0,
    //         },
    //         data: [
    //             {
    //                 type: "line",

    //                 dataPoints: [
    //                     { x: 2, y: 4 },
    //                     { x: 3, y: 6 },
    //                     { x: 4, y: 8 },
    //                     { x: 5, y: 10 },
    //                     { x: 6, y: 12 }
    //                 ]
    //             }, {
    //                 type: "scatter",
    //                 toolTipContent: "<b>Area: </b>{x} sq.ft<br/><b>Price: </b>${y}k",
    //                 dataPoints: [
    //                     { x: 5, y: 9 },
    //                     { x: 6, y: 0 },
    //                     { x: 1, y: 3 },
    //                     { x: 7, y: 5 },

    //                 ]
    //             }
    //         ]
    //     });

    // chart.render();
    var ctx = document.getElementById('lr_plot').getContext('2d');

    // var myLineChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     }
    // });
}
