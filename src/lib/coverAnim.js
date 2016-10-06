import TWEEN from './Tween.js';
// import easePack from './easePack.min.js';
import rAF from './rAF.js';

function animCover({ canvas , element }) {

    var width, height, cont, canvas, ctx, points, tweens = [], target;

    cont = document.getElementById(element);
    cont.style.height = height + 'px';

    width = window.innerWidth;
    height = window.innerHeight;

    canvas = document.getElementById(canvas);
    canvas.width = width;
    canvas.height = height;

    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        target = {
            x: width / 2,
            y: height / 2
        };

        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for (var x = 0; x < width; x = x + width / 10) {
            for (var y = 0; y < height; y = y + height / 10) {
                var px = x + Math.random() * width / 5;
                var py = y + Math.random() * height / 5;
                var p = {
                    x: px,
                    originX: px,
                    y: py,
                    originY: py
                };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for (var i in points) {
            var c = new Circle(points[i], 1 + Math.random() * 3, 'rgba(255,255,255,0.'+parseInt(Math.random()*7+2)+')');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if (!('ontouchstart' in window))
            window.addEventListener('mousemove', mouseMove)

        window.addEventListener('resize', (e)=>{
            timeFrameLimit(resize,300,e)
        });

        function timeFrameLimit(fn,limit,e){
            /*
                Prevents [fn] from spaming the stack on every event
            */
            if (window.timeFrameLimitTimmer != undefined)
                clearTimeout(window.timeFrameLimitTimmer)
            window.timeFrameLimitTimmer = setTimeout(()=>{
                if (e) fn(e)
                else fn()
            },limit)
        }// END timeFrameLimit

    }

    function mouseMove(e) {

        var posy;
        var posx = posy = 0;

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        target.x = posx
        target.y = posy

    }

    function resize(e) {
        console.log("Cover Anim Resize",e);
        width = window.innerWidth;
        height = window.innerHeight;
        cont.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
        // Flush
        for(var i in tweens) {
            tweens[i].stop()
        }
        tweens = []
        ctx = ""
        points  = ""
        // Restart
        initHeader();
        initAnimation();
    }

    // animation
    function initAnimation() {
        animate();
        for (var i in points) {
            shiftPoint(points[i],i);
        }
    }

    function animate(time) {

        ctx.clearRect(0, 0, width, height);
        for (var i in points) {
            // detect points in range
            if (Math.abs(getDistance(target, points[i])) < 7000) {
                points[i].active = 0.4;
                points[i].circle.active = 0.6;
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                points[i].active = 0.2;
                points[i].circle.active = 0.3;
            } else if (Math.abs(getDistance(target, points[i])) < 60000) {
                points[i].active = 0.1;
                points[i].circle.active = 0.1;
            } else {
                points[i].active = 0;
                points[i].circle.active = 0.3;
            }

            drawLines(points[i]);
            points[i].circle.draw();
        }

        requestAnimationFrame(animate);
        TWEEN.update(time);

    }

    function shiftPoint(p,i) {

        const randTime = () => {
            return parseInt(1000+(3000 * Math.random()))
        }

        const update = () => {
            p.x = p.x
            p.y = p.y
        }

        tweens[i] = new TWEEN.Tween(p)
            .to({
                x: p.originX - 20 + Math.random() * 100,
                y: p.originY - 20 + Math.random() * 100
            }, randTime())
            .delay(randTime())
            .easing(TWEEN.Easing.Quintic.InOut)
            .onUpdate(update)
            .onComplete(()=>{
                shiftPoint(p,i)
            })
            .start();

    }

    // Canvas manipulation
    function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(200,200,200,' + p.active + ')';
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if (!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.active + ')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

};




export default animCover;