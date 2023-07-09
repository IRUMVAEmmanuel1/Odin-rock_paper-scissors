function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return 'It's a tie!';
    }
  
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } else {
      console.log('It's a tie game!');
    }
  }
  
  // Start the game
  game();
  