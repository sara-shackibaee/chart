var ctx = document.getElementById('myChart5').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(0, 0, 0)',

        datasets: [{

            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            label: 'Line Dataset',
            data: [50, 50, 50, 50],

            // Changes this dataset to become a line
            type: 'line'
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {

    }
});