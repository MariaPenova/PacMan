let PacMan = document.getElementById('pacman');
var moveX = -226, moveY = 0;
const speed = 1;
var w = document.body.clientWidth; var h = document.body.clientHeight;
var view_W = w - 110; var view_H = h + 7;
window.addEventListener("keydown", Control);
function Control(pressed) {
    let key = pressed.key;
    let pos = document.getElementById('pos');


    if (key == "ArrowUp" && moveY > 0) {
        moveY = moveY - speed;
    }
    else if (key == "ArrowDown" && moveY < view_H) {
        moveY = moveY + speed;
    }
    else if (key == "ArrowLeft" && moveX > -226) {
        moveX = moveX - speed;
    }
    else if (key == "ArrowRight" && moveX < view_W) {
        moveX = moveX + speed;


    }

    PacMan.style.left = moveX + "px";
    PacMan.style.top = moveY + "px"
    pos.innerHTML = "X:" + moveX + "Y" + moveY;
    // setInterval(function(){ 
    //     //code goes here that will be run every 5 seconds. 
    //     PacMan.style.clip = "rect(0px,244px,16px,229px)"  
    //     PacMan.style.clip = "rect(0px, 260px, 16px, 245px)"
    //     PacMan.style.clip = "rect(0px, 276px, 16px, 261px)"  
    // }, 1000);


}
var state = 0; //
setInterval(function () {
    state++;

    if (state > 2) {
        state = 0;
    }
    if (state == 0){
        PacMan.style.clip = "rect(0px,244px,16px,229px)" 
    }
    if (state == 1){
    PacMan.style.clip = "rect(0px, 260px, 16px, 245px)"
    }
    if (state == 2){
    PacMan.style.clip = "rect(0px, 276px, 16px, 261px)"
    }

}, 100)
