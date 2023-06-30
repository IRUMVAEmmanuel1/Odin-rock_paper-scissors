let playScore = 0;
let compScore = 0;
const computerPlay = () => {
	const arrOfChoices = ["rock", "paper", "scissors"];
	const randomNum = Math.floor(Math.random() * 3);
	const compChoice = arrOfChoices[randomNum];
	return compChoice;
};

const playRound = (playerSelection, computerSelection) => {
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
		return "You lost! Rock crushes Scissors ";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return "You won!  Scissors cuts paper ";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		return "You lost!  Paper cover Rocks ";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		return "You won! Rock crushes Scissors ";
	}
	// else if(playerSelection === 'paper'  && computerSelection === 'scissors'){
	//     return "You lost! Scissors cuts Paper "

	// }
	else if (playerSelection === "paper" && computerSelection === "rock") {
		return "You won!  paper covers rock ";
	}
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
