function init() {
    var canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        draw(ctx);
    } else {
        alert('Your browser does not support the canvas element!');
    }
}

function draw(ctx) {
    new Path2D();
}