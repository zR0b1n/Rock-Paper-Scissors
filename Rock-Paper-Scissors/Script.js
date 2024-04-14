let userChoice = "";
let userImg = document.getElementById('userImg');
let pcImg = document.getElementById('pcImg');
let wins = 0;
let looses = 0;
// 1 = Rock; 2 = Paper; 3 = Scissors
function play(choice){
	userChoice = choice;
	compChoice = Math.floor(Math.random()*3)+1;
	if(userChoice == 'Rock'){
		if(compChoice == 1){
			document.getElementById('displayStatus').innerHTML = 'Unentschieden';
			pcImg.src = 'Images/Rock.png';
		}else if(compChoice == 2){
			document.getElementById('displayStatus').innerHTML = 'Verloren';
			looses ++;
			document.getElementById('displayLooses').innerHTML = looses;
			pcImg.src = 'Images/Paper.png';
		}else if(compChoice == 3){
			document.getElementById('displayStatus').innerHTML = 'Gewonnen';
			pcImg.src = 'Images/Scissors.png';
			wins ++;
			document.getElementById('displayWins').innerHTML = wins
		}
		userImg.src = 'Images/Rock.png';
	}
	if(userChoice == 'Paper'){
		if(compChoice == 1){
			document.getElementById('displayStatus').innerHTML = 'Gewonnen';
			pcImg.src = 'Images/Rock.png';
			wins ++;
			document.getElementById('displayWins').innerHTML = wins
		}else if(compChoice == 2){
			document.getElementById('displayStatus').innerHTML = 'Unentschieden';
			pcImg.src = 'Images/Paper.png';
		}else if(compChoice == 3){
			document.getElementById('displayStatus').innerHTML = 'Verloren';
			pcImg.src = 'Images/Scissors.png';
			looses ++;
			document.getElementById('displayLooses').innerHTML = looses;
		}
		userImg.src = 'Images/Paper.png';
	}
	if(userChoice == 'Scissors'){
		if(compChoice == 1){
			document.getElementById('displayStatus').innerHTML = 'Verloren';
			pcImg.src = 'Images/Rock.png';
			looses ++;
			document.getElementById('displayLooses').innerHTML = looses;
		}else if(compChoice == 2){
			document.getElementById('displayStatus').innerHTML = 'Gewonnen';
			wins ++;
			document.getElementById('displayWins').innerHTML = wins
			pcImg.src = 'Images/Paper.png';
		}else if(compChoice == 3){
			document.getElementById('displayStatus').innerHTML = 'Unentschieden';
			pcImg.src = 'Images/Scissors.png';
		}
		userImg.src = 'Images/Scissors.png';
	}

	document.getElementById('yCTxt').innerHTML = "Your choice";
	document.getElementById('cCTxt').innerHTML = "Computers choice";
}