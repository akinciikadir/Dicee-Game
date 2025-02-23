
player1=Math.floor((Math.random())*6+1);
player2=Math.floor((Math.random())*6+1);

var zarResim1="images/dice"+player1+".png";
var zarResim2="images/dice"+player2+".png";

document.querySelectorAll("img")[0].setAttribute("src",zarResim1);
document.querySelectorAll("img")[1].setAttribute("src",zarResim2);


window.onload = function () {

    if(player1>player2){
        document.querySelector("h1").innerHTML="player1 win";
    }
    
    else if(player1<player2){
        document.querySelector("h1").innerHTML="player2 win";
    }

    else{
        document.querySelector("h1").innerHTML="DRAW";
    }

};