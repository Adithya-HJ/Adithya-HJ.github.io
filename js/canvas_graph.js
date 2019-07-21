

window.onload = function () {

    // var ctx = document.getElementById('lr_plot').getContext('2d');
    // var canvas = document.getElementById('lr_plot');
    // console.log('opened', canvas)
    
    var PIXEL_RATIO = (function () {
        var ctx = document.createElement("canvas").getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio || 1;
    
        return dpr / bsr;
    })();
    
    
    createHiDPICanvas = function(w, h, ratio) {
        if (!ratio) { ratio = PIXEL_RATIO; }
        var can = document.getElementById("lr_plot");
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        return can;
    }
    
    
    var canvas = createHiDPICanvas(400, 400);


    //Always check for properties and methods, to make sure your code doesn't break in other browsers.
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.font = "8px";
        let step = parseInt(canvas.width / 20)
        for (i = 0; i <= canvas.width; i += step) {
            for (j = 0; j <= canvas.height; j += step) {
                ctx.fillRect(i, j, 1, 1)
            }
        }
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, canvas.width - step)
        ctx.stroke()
        ctx.moveTo(0, canvas.height / 2)
        ctx.lineTo(canvas.height - step, canvas.height / 2)
        ctx.stroke()
        let pos = 0
        for (k = -10; k < 10; k++) {
            if (k == 0) {
                pos += step
                continue
            }
            ctx.fillText(String(k), pos, 210);

            pos += step
        }
        pos = 0
        for (k = 10; k > -10; k--) {
            if (k == 0) {
                pos += step
                continue
            }
            ctx.fillText(String(k), 190, pos);

            pos += step
        }


    }
}
