function getComputerChoise() {
    
    let random = Math.random() * 3;

    if (random <= 1){
        console.log("Rock");
    } else if (random <= 2) {
        console.log('Scissors');
    } else {
        console.log("Paper");
    }


    return random;
}

getComputerChoise();