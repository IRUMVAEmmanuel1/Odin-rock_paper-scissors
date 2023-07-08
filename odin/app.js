let playScore = 0;
let compScore = 0;
const computerPlay = () => {
	const arrOfChoices = ["rock", "paper", "scissors"];
	const randomNum = Math.floor(Math.random() * 3);
	const compChoice = arrOfChoices[randomNum];
	return compChoice;
};

const playRound = (playerSelection, computerSelection) => {
	console.log("1", playerSelection, "2", computerSelection);
	if (playerSelection === "rock" && computerSelection === "rock") {
		return "You tied! You both picked rock";
	} else if (
		playerSelection === "scissors" &&
		computerSelection === "scissors"
	) {
		return "You tied! You both Picked Scissors ";
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		return "You tied! You both Picked paper ";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		compScore++;
		return "You lost! Rock crushes Scissors ";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playScore++;
		return "You won!  Scissors cuts paper ";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		compScore++;
		return "You lost!  Paper cover Rocks ";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playScore++;
		return "You won! Rock crushes Scissors ";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		compScore++;
		return "You lost! Scissors cuts Paper ";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playScore++;
		return "You won!  paper covers rock ";
	}
};

const playerSelection = "rock";

const game = () => {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt('Choose Your throw Sign', 'Paper')
		const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
	}
	if (playScore > compScore){
		return 'Congratulation, You WIN'
	}
	else if(playScore < compScore ){
		return 'You Loose, better keep Learning how to throws!'
	}
	else{
		return 'You tied both, Not too bad!'
	}
};
console.log(game())
