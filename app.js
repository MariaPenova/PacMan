
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
    // setInterval(function(){ 
    //     //code goes here that will be run every 5 seconds. 
    //     PacMan.style.clip = "rect(0px,244px,16px,229px)"  
    //     PacMan.style.clip = "rect(0px, 260px, 16px, 245px)"
    //     PacMan.style.clip = "rect(0px, 276px, 16px, 261px)"  
    // }, 1000);
    
    var tID; //we will use this variable to clear the setInterval()
    function animateScript() {
    var    position = 244; //start position for the image slicer
    var position1 = 229;
    const  interval = 100; //100 ms of interval for the setInterval()
    tID = setInterval ( () => {
        PacMan.style.clip = `rect(0px, ${position}px, 16px, ${position1}px)`;
    //we use the ES6 template literal to insert the variable "position"
    if (position < 732)
    { position = position + 16;}
    //we increment the position by 256 each time
    else
    { position = 244; }
    //reset the position to 256px, once position exceeds 1536px
    }
    , interval ); //end of setInterval
    }

}

