function getComputerChoice(){
    const choices = ['Paper', 'Rock', 'Scissor'];
    const randomIndex= Math.floor(Math.random() * choices.length)

    return choices[randomIndex]
}
console.lo(getComputerChoice());
