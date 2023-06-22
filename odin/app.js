const computerPlay = () =>{
    const arrOfChoices = ['Rock', 'Paper','Scissors']
    const randomNum = Math.floor(Math.random() *3 )
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, computerSelection) =>{
    if (playerSelection === 'rock' && computerSelection==='rock'){
        return "You tied! You both picked rock" 
    }
    else if(playerSelection === 'scissors'  && computerSelection === 'scissors'){
        return "You tied! You both Picked Scissors "

    }
    else if(playerSelection === 'scissors'  && computerSelection === 'rock'){
        return "You lost! Rock crushes Scissors "

    }
}