var ctx = document.getElementById('myChart2').getContext('2d');
var myRadarChart = new Chart(ctx, {
    type: 'radar',

    data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(0, 0, 0)',
            data: [500, 200, 250, 150],


        }]
    },


    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }






});