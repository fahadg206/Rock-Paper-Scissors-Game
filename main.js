
const myResult = document.getElementById('player-selection');
const computerResult = document.getElementById('computer-selection');


const buttons = document.querySelectorAll('.button'); 


function rockFunction() {
    myResult.innerHTML = "Rock"
}
function paperFunction() {
    myResult.innerHTML = "Paper"
}
function scissorsFunction() {
    myResult.innerHTML = "Scissors"
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = ['Rock', 'Paper', 'Scissors'];
        const random = Math.floor(Math.random() * computerSelection.length);
        const computerPick = computerSelection[random];
        console.log(computerPick);
        computerResult.innerHTML = computerPick;

    

    })
})

