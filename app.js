
var moveX = -226, moveY = 0;
const speed = 1;
var w = document.body.clientWidth; var h = document.body.clientHeight;
var view_W = w -110; var view_H = h +7;
window.addEventListener("keydown",Control);
function Control(pressed){
    let key = pressed.key;
    let pos = document.getElementById('pos');
    let PacMan = document.getElementById('pacman');

    if(key == "ArrowUp"&& moveY>0)
    {
        moveY = moveY - speed;
    }
    else if(key == "ArrowDown"&& moveY <view_H)
    {
        moveY = moveY + speed;
    }
    else if(key == "ArrowLeft"&& moveX >-226)
    {
        moveX = moveX - speed;
    }
    else if(key == "ArrowRight"&& moveX < view_W)
    {
        moveX = moveX + speed;
    }

    PacMan.style.left = moveX + "px";
    PacMan.style.top = moveY + "px"
    pos.innerHTML = "X:" + moveX + "Y" + moveY;
}

