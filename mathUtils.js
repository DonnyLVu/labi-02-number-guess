
export function getRandomNumber(){
    return Math.floor(Math.random() * 20) + 1;
}

export function compareNumbers(cAnswers, userNum){
    if (userNum === getRandomNumber){
        results.textContent = 'WIN';
        return 0;
    }
    if (userNum > getRandomNumber){
        results.textContent = 'TOO BIG';
        return -1;
    }
    if (userNum < getRandomNumber){
        results.textContent = 'TOO SMALL';
        return +1;
    }
}










// export function compareNumbers(){
//     if (userNum === getRandomNumber()){
//         return 0;
//     }
//     if (userNum > getRandomNumber()){
//         return +1;
//     }
//     if (userNum < getRandomNumber()){
//         return -1;
//     }
// }

