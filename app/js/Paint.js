let paint = document.querySelector('.paint');
let paint__wrap = document.querySelector('.paint__wrap');

let x = -300
let y = 70
let z = 0

let intervalTransform = setInterval(function () {
    x += 9;
    y -= 0.5;

    if (x < 1100) {
        paint.style.transform = `perspective(1200px) translateZ(${x}px) translateY(${y}px)`;
        /*if(z < 15) {
            z += 0.5;
            paint.style.transform = `perspective(1200px) translateZ(${x}px) translateY(${y}px) rotateY(${z}deg`
        } else {
            z - 15;
            paint.style.transform = `perspective(1200px) translateZ(${x}px) translateY(${y}px) rotateY(${z}deg`
        }*/
        //paint__wrap.style.transform = `perspective(1200px) rotateY(${z}deg)`
    } else {
        clearInterval(intervalTransform)
    }
}, 35)
