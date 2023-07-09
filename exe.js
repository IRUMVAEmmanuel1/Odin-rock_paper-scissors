function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
  
    if (playerChoice === computerChoice) {
      return 'It's a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('What is your choice? (rock, paper, scissors): ');
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: ${result}`);
  
      if (result === 'You win!') {
        playerScore++;
      } else if (result === 'You lose!') {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You won!');
    } else if (playerScore < computerScore) {
      console.log('You lost!');
    } else {
      console.log('It's a tie!');
    }
  }
  
  game();