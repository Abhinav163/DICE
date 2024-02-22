function random(){
        var randomnum = Math.floor(Math.random()*6)+1;
        if(randomnum===1){
        document.getElementById("img2").src="./dice1.png";
        }
        else if(randomnum===2){
        document.getElementById("img2").src="./dice2.png";
        }
        else if(randomnum===3){
        document.getElementById("img2").src="./dice3.png";
        }
        else if(randomnum===4){
        document.getElementById("img2").src="./dice4.png";
        }
        else if(randomnum===5){
        document.getElementById("img2").src="./dice5.png";
        }
        else if(randomnum===6){
        document.getElementById("img2").src="./dice6.png";
        }
}
