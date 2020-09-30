const refreshButton = document.getElementById('refresh-button');
const submitButton = document.getElementById('submit-button');
const input = document.getElementById('userInput');

const randomNum = Math.floor((Math.random() * 20) + 1);
let guessesLeft = 4;

console.log(randomNum);

submitButton.addEventListener('click', () => {
    
    if (input.valueAsNumber === randomNum){
        ResultsH.textContent = 'WINNER WINNNNNER CHIIIIIIIICKEN DINNER';
        refreshButton.textContent = 'You should redo it, i could do this im my sleep';
    }  

    if (input.valueAsNumber < randomNum){
        guessesLeft--;
        ResultsH.textContent = 'The digits you chose and appeared on your screen was GOT DANG SMALL';
        GuessH.textContent = guessesLeft;
    
    } 

    if (input.valueAsNumber > randomNum){
        guessesLeft--;
        ResultsH.textContent = 'The number you chose was TOOOOO DANG BIG';
        GuessH.textContent = guessesLeft;
    }

    if (guessesLeft === 0){
        ResultsH.textContent = 'Really lost to something i could do im my sleep, im disappointed';
    }
});
refreshButton.addEventListener('click', () =>{
    location.reload();
});

// submitButton.addEventListener('click', guessingGame);
// function guessingGame(){