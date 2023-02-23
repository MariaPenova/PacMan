// let dot = document.getElementsByClassName('Dot')[0]
// let clone = dot.cloneNode(true)
// clone.style = 'left: 25px; top: 10px;';
// dot.parentElement.appendChild(clone);

// clone = dot.cloneNode(true)
// clone.style = 'left: 30px; top: 10px;';
// dot.parentElement.appendChild(clone);

let coordinates = [
    [17, 50],
    [17, 58],
    [17, 66],
    [25, 66],
    [33, 66],
    [41, 66],
    [49, 66],
    [33, 10],
    [41, 10],
    [49, 10],
    [57, 10],
    [57, 18],
    [57, 26],
    [57, 34],
    [57, 50],
    [57, 58],
    [57, 66],
    [57, 74],
    [57, 82],
    [57, 90],
    [57, 98],
    [57, 106],
    [57, 114],
    [57, 122],
    [57, 130],
    [57, 138],
    [57, 146],
    [57, 154],
    [57, 162],

    [65, 162],
    [73, 162],
    [81, 162],
    [89, 162],
    [98, 162],
    [106, 162],
    [106, 170],
    [106, 178],
    [49, 162],
    [41, 162],
    [33, 162],
    [25, 162],
    [17, 162],

    [17, 170],
    [17, 178],
    [17, 186],

    [25, 186],
    [33, 186],

    [33, 194],
    [33, 202],

    [57, 170],
    [57, 178],
    [57, 186],
    [57, 194],
    [57, 202],
    [57, 210],
    [49, 210],
    [41, 210],
    [33, 210],
    [25, 210],
    [17, 210],

    [17, 218],
    [17, 226],
    [17, 234],
    [25, 234],
    [33, 234],
    [41, 234],
    [49, 234],
    [57, 234],
    [65, 234],
    [73, 234],
    [81, 234],
    [90, 234],
    [98, 234],
    [106, 234],
    [114, 234],
    [122, 234],
    [130, 234],
    [138, 234],
    [146, 234],
    [154, 234],
    [162, 234],
    [170, 234],
    [178, 234],
    [186, 234],
    [194, 234],
    [202, 234],
    [210, 234],
    [218, 234],

    [218, 226],
    [218, 218],
    [218, 210],


    [209, 210],
    [201, 210],

    [201, 202],
    [201, 194],
    [201, 186],

    [209, 186],

    [217, 178],
    [217, 170],
    [217, 162],

    [209, 162],
    [201, 162],
    [193, 162],
    [185, 162],


    [169, 162],
    [161, 162],
    [153, 162],
    [145, 162],
    [137, 162],
    [129, 162],

    [129, 170],
    [129, 178],

    [193, 210],
    [185, 210],
    [177, 210],
    [177, 202],
    [177, 194],
    [177, 186],

    [169, 186],
    [161, 186],
    [153, 186],

    [153, 194],
    [153, 202],
    [153, 210],

    [145, 210],
    [137, 210],
    [129, 210],

    [129, 218],
    [129, 226],
    [129, 234],



    [145, 186],
    [137, 186],
    [129, 186],
    [121, 186],
    [113, 186],
    [105, 186],
    [97, 186],
    [89, 186],
    [81, 186],
    [73, 186],
    [81, 194],
    [81, 202],
    [81, 210],

    [89, 210],
    [97, 210],
    [105, 210],
    [105, 218],
    [105, 226],
    [105, 234],

    [65, 186],

    [177, 178],
    [177, 170],
    [177, 162],
    [177, 154],
    [177, 146],
    [177, 138],
    [177, 130],
    [177, 122],
    [177, 114],
    [177, 106],
    [177, 98],
    [177, 90],
    [177, 82],
    [177, 74],
    [177, 66],
    [177, 58],
    [177, 50],
    [177, 42],
    [177, 34],
    [177, 26],
    [177, 18],
    [177, 10],

    [185, 10],
    [193, 10],
    [201, 10],
    [209, 10],
    [217, 10],

    [217, 18],
    [217, 34],

    [209, 42],
    [201, 42],
    [193, 42],
    [185, 42],

    [217, 42],
    [217, 50],
    [217, 58],
    [217, 66],

    [209, 66],
    [201, 66],
    [193, 66],
    [185, 66],
    [65, 10],
    [73, 10],
    [81, 10],
    [89, 10],
    [97, 10],
    [105, 10],
    [105, 18],
    [105, 26],
    [105, 34],

    [169, 42],
    [161, 42],
    [153, 42],

    [153, 50],
    [153, 58],
    [153, 66],

    [145, 66],
    [137, 66],
    [129, 66],

    [145, 42],
    [137, 42],
    [129, 42],
    [129, 34],
    [129, 26],
    [129, 18],
    [129, 10],
    [137, 10],
    [145, 10],
    [153, 10],
    [161, 10],
    [169, 10],

    [121, 42],
    [113, 42],
    [105, 42],
    [97, 42],
    [89, 42],
    [81, 42],

    [81, 50],
    [81, 58],
    [81, 66],

    [89, 66],
    [98, 66],
    [106, 66],



    [73, 42],
    [65, 42],
    [57, 42],
    [49, 42],
    [41, 42],
    [33, 42],
    [25, 42],
    [17, 42],

    [17, 34],

    [17, 18],
    [17, 10]
]
let dot = document.getElementsByClassName('Dot')[0]
for (let coord of coordinates) {
    let clone = dot.cloneNode(true)
    clone.style = `left: ${coord[0]}px; top:${coord[1]}px;`;
    dot.parentElement.appendChild(clone);
}
let coordinatesBig = [
    [214, 26],
    [214, 186],
    [14, 186]

]
let bigDot = document.getElementsByClassName('BigDot')[0]
for (let coord1 of coordinatesBig) {
    let clone = bigDot.cloneNode(true)
    clone.style = `left: ${coord1[0]}px; top:${coord1[1]}px;`;
    bigDot.parentElement.appendChild(clone);
}


let PacMan = document.getElementById('pacman');
var moveX = 14, moveY = 13;
var position;
const speed = 1;
var w = document.body.clientWidth; var h = document.body.clientHeight;
var view_W = w - 110; var view_H = h - 1;
window.addEventListener("keydown", Control);
function Control(pressed) {
    let key = pressed.key;
    let pos = document.getElementById('pos');


    if (key == "ArrowUp" && moveY > 0) {
        moveY = moveY - speed;
        position = 'goingUp'
    }
    else if (key == "ArrowDown" && moveY < view_H) {
        moveY = moveY + speed;
        position = 'goingDown'
    }
    else if (key == "ArrowLeft" && moveX > -226) {
        moveX = moveX - speed;
        position = 'goingLeft'
    }
    else if (key == "ArrowRight" && moveX < view_W) {
        moveX = moveX + speed;
        position = 'goingRight'


    }

    PacMan.style.left = moveX + "px";
    PacMan.style.top = moveY + "px";

}
var state = 0; 
setInterval(function () {
    state++;
    if (state > 2) {
        state = 0;
    }
    switch (position) {
        case 'goingRight':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top 0px"
               // RedGhost.style.objectPosition = "left -229px top -64px"
               // PurpleGhost.style.objectPosition = "left -229px top -80px"
               //TurquoiseGhost.style.objectPosition = "left -229px top -96px"
                //OrangeGhost.style.objectPosition = "left -229px top -112px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top 0px"
                //RedGhost.style.objectPosition = "left -245px top -64px"
                // PurpleGhost.style.objectPosition = "left -245px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -245px top -96px"
                //OrangeGhost.style.objectPosition = "left -245px top -112px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top 0px"
            }
            break;
        case 'goingLeft':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top -16px"
                //RedGhost.style.objectPosition = "left -261px top -64px"
                // PurpleGhost.style.objectPosition = "left -261px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -261px top -96px"
                //OrangeGhost.style.objectPosition = "left -261px top -112px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top -16px"
                //RedGhost.style.objectPosition = "left -277px top -64px"
                // PurpleGhost.style.objectPosition = "left -277px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -277px top -96px"
                //OrangeGhost.style.objectPosition = "left -277px top -112px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top -16px"
            }
            break;
        case 'goingUp':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top -32px"
                //RedGhost.style.objectPosition = "left -293px top -64px"
                // PurpleGhost.style.objectPosition = "left -293px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -293px top -96px"
                //OrangeGhost.style.objectPosition = "left -293px top -112px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top -32px"
                //RedGhost.style.objectPosition = "left -309px top -64px"
                // PurpleGhost.style.objectPosition = "left -309px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -309px top -96px"
                //OrangeGhost.style.objectPosition = "left -309px top -112px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top -32px"
            }
            break;

        case 'goingDown':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top -48px"
                //RedGhost.style.objectPosition = "left -325px top -64px"
                // PurpleGhost.style.objectPosition = "left -325px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -325px top -96px"
                //OrangeGhost.style.objectPosition = "left -325px top -112px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top -48px"
                //RedGhost.style.objectPosition = "left -341px top -64px"
                //PurpleGhost.style.objectPosition = "left -341px top -80px"
                //TurquoiseGhost.style.objectPosition = "left -341px top -96px"
                //OrangeGhost.style.objectPosition = "left -341px top -112px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top -48px"
            }
            break;
    }



}, 100)
