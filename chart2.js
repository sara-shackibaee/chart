var ctx = document.getElementById('myChart1').getContext('2d');

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: 'rgb(118, 118, 61)',
            borderColor: 'rgb(0, 0, 0)',
            data: [1, 2, 3, 4, 5, 6, 7]
        }]
    },
    options: {}
});