var ctx = document.getElementById('myChart3').getContext('2d');
var myBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        // X Value
        backgroundColor: 'rgb(118, 118, 61)',
        borderColor: 'rgb(0, 0, 0)',
        x: 300,

        // Y Value
        y: 400,

        // Bubble radius in pixels (not scaled).
        r: 0
    },
    options: {}
});