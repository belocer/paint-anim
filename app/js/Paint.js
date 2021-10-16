let paint = document.querySelector('.paint');
let paint__wrap = document.querySelector('.paint__wrap');

immersion()

setInterval(() => {
    window.location.reload();
}, 25000)

function immersion() {
    setTimeout(() => {
        let z = 100
        console.log(z);
        let intervalTransform = setInterval(function () {
            if (z < 1100) {
                z += 4;
            } else {
                z = 1100;
                clearInterval(intervalTransform)
            }

            paint__wrap.style.transform = `perspective(1200px) translateZ(${z}px) translateY(0px) rotateX(0) rotateY(0) rotateZ(0)`;

            if (z >= 1100) {
                clearInterval(intervalTransform)
            }

        }, 38)
    }, 3590)

    setTimeout(() => {
        let arr_element_reverse_animation = [
            'people1',
            'house3',
            'house1',
            'cloud1',
            'balloon2',
            'birds',
            'cloud4',
            'people2',
            'house2',
            'house4',
            'balloon1',
            'people4',
            'demon',
            'tower',
            'house5',
            'people3',
            'castle',
            'cloud3',
            'tree1',
            'paint__wrap',
        ];

        arr_element_reverse_animation.forEach(item => document.querySelector(`.${item}`).style.animation = `8s ease-in-out 0s 1 forwards running move_${item}Reverse`)

        let z = 1100
        console.log(z);
        let intervalTransform = setInterval(function () {
            if (z >= 100) {
                z -= 4;
            } else {
                z = 100;
                clearInterval(intervalTransform)
            }

            paint__wrap.style.transform = `perspective(1200px) translateZ(${z}px) translateY(0px) rotateX(360deg) rotateY(0) rotateZ(0)`;

            if (z >= 1100) {
                clearInterval(intervalTransform)
            }

        }, 38)
    }, 14000);
}

