let dot = document.getElementsByClassName('Dot')[0]
let clone = dot.cloneNode(true)
clone.style = 'left: 25px; top: 10px;';
dot.parentElement.appendChild(clone);

clone = dot.cloneNode(true)
clone.style = 'left: 30px; top: 10px;';
dot.parentElement.appendChild(clone);


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
var state = 0; //
setInterval(function () {
    state++;
    if (state > 2) {
        state = 0;
    }
    switch (position) {
        case 'goingRight':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top 0px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top 0px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top 0px"
            }
            break;
        case 'goingLeft':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top -16px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top -16px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top -16px"
            }
            break;
        case 'goingUp':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top -32px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top -32px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top -32px"
            }
            break;

        case 'goingDown':
            if (state == 0) {
                PacMan.style.objectPosition = "left -229px top -48px"
            }
            if (state == 1) {
                PacMan.style.objectPosition = "left -245px top -48px"
            }
            if (state == 2) {
                PacMan.style.objectPosition = "left -261px top -48px"
            }
            break;
    }



}, 100)
