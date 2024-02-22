function random(){
        var randomnum = Math.floor(Math.random()*6)+1;
        if(randomnum===1){
        document.getElementById("img2").src="./images/dice1.png";
        }
        else if(randomnum===2){
        document.getElementById("img2").src="./images/dice2.png";
        }
        else if(randomnum===3){
        document.getElementById("img2").src="./images/dice3.png";
        }
        else if(randomnum===4){
        document.getElementById("img2").src="./images/dice4.png";
        }
        else if(randomnum===5){
        document.getElementById("img2").src="./images/dice5.png";
        }
        else if(randomnum===6){
        document.getElementById("img2").src="./images/dice6.png";
        }
}