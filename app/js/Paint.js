let paint = document.querySelector('.paint');
let paint__wrap = document.querySelector('.paint__wrap');

let z = 100
let y = 0

setTimeout(() => {
    let intervalTransform = setInterval(function () {
        z += 8;
        y -= 0.3;

        if (z < 1100) {
            paint__wrap.style.transform = `perspective(1200px) translateZ(${z}px) translateY(${y}px) rotateX(0) rotateY(0) rotateZ(0)`;
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
}, 6000)
