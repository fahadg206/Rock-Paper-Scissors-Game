
const myResult = document.getElementById('player-selection');
const computerResult = document.getElementById('computer-selection');
const winner = document.getElementById('result');


const buttons = document.querySelectorAll('.button'); 
const userArray = ['Rock', 'Paper', 'Scissors'] 
let userPick = '';
function rockFunction() {
    myResult.innerHTML = userArray[0];
    userPick = userArray[0];
};
function paperFunction() {
    myResult.innerHTML = userArray[1];
    userPick = userArray[1];
};
function scissorsFunction() {
    myResult.innerHTML = userArray[2];
    userPick = userArray[2];
}; 


buttons.forEach(button => {

    button.addEventListener('click', () => {
       
        const computerSelection = [{name: 'Rock', defeat: 'Paper'}, {name: 'Paper', defeat: 'Scissors'}, {name:'Scissors', defeat: 'Rock'}];

        const random = Math.floor(Math.random() * computerSelection.length);
        const computerPick = computerSelection[random].name;
        const computerDefeat = computerSelection[random].defeat;
        
        computerResult.innerHTML = computerPick;

        

        if(userPick === computerDefeat) {
            winner.innerHTML = "YOU WIN!"
        } else if(userPick === computerPick) {
            winner.innerHTML = "TIE!"
        } else {winner.innerHTML = "Computer WINS!"}



        
    






        console.log("You clicked" + " " + myResult.getInnerHTML())
    })
})

