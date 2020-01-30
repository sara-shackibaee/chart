var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(118, 118, 61)',
            borderColor: 'rgb(0, 0, 0)',
            data: [0, 1, 3, 6, 4, 8, 5]
        }]
    },

    // Configuration options go here
    options: {}
});