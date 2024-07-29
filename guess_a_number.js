/*première étape de l'exercice :

function proposeNumber() {
    let proposedNumber = 0;
    while (proposedNumber <= 0 || proposedNumber > 50) {
        proposedNumber = parseInt(prompt("What will be the number to guess?"));
    }
    return proposedNumber;
}

function askNumber() {
    let givenNumber = parseInt(prompt("Guess the number"));
    return givenNumber;
}

function didIWin(numberToGuess, guessingNumber) {
    if (guessingNumber == numberToGuess) {
        alert("Bravo ! Vous avez deviné le nombre");
        return true;
    } else if (guessingNumber > numberToGuess) {
        alert("Plus petit");
        return false;
    } else if (guessingNumber < numberToGuess) {
        alert("Plus grand");
        return false;
    }
}
function gamePlay() {
    let guessTheNumber = proposeNumber();
    let guessingNumber = askNumber();
    while (didIWin(guessTheNumber, guessingNumber) == false) {
        guessingNumber = askNumber();
    }
}

gamePlay();

 2ème étape de l'exercice :

let proposedNumber;

function proposeNumber() {
    proposedNumber = parseInt(prompt("What is the number to guess?"));
    while (proposedNumber < 0 || proposedNumber > 50 || isNaN(proposedNumber)) {
        proposedNumber = parseInt(prompt("What is the number to guess?"));
    }
    return proposedNumber;
}

function askNumber() {
    const submitButton = document.getElementById("submitButton");
    const givenNumber = document.getElementById("givenNumber");
    const message = document.getElementById("message");

    submitButton.addEventListener("click", () => {
        const chosenNumber = parseInt(givenNumber.value);
        if (chosenNumber === proposedNumber) {
            message.textContent = "Congratulations! You guessed the right number!";
        } else if (chosenNumber > proposedNumber) {
            message.textContent = "Try again! The number is smaller.";
        } else {
            message.textContent = "Try again! The number is bigger.";
        }
    });
}

function gamePlay() {
    proposeNumber();
    askNumber();
}

gamePlay();




*/



//3ème étape :

let proposedNumber;
let compteurDeTour = 0;
let maxNumber = 50;
let minNumber = 0;
document.getElementById("minNumber").innerText = minNumber + "<";
document.getElementById("maxNumber").innerText = "<" + maxNumber;

function proposeNumber() {
    proposedNumber = parseInt(prompt("What is the number to guess?"));
    while (proposedNumber < 0 || proposedNumber > 50) {
        proposedNumber = parseInt(prompt("What is the number to guess?"));
    }
    return proposedNumber;
}

function askNumber() {
    const submitButton = document.getElementById("submitButton");
    const givenNumber = document.getElementById("givenNumber");
    const message = document.getElementById("message");

    submitButton.addEventListener("click", () => {
        const chosenNumber = parseInt(givenNumber.value);
        compteurDeTour += 1;
        if (chosenNumber === proposedNumber) {
            document.getElementById("pageContent").innerText =
                "Congratulations! You guessed the right number!";

            return;
        } else if (chosenNumber > proposedNumber) {
            message.textContent = "Try again! The number is smaller.";
            if (chosenNumber < maxNumber) {
                maxNumber = chosenNumber;
                document.getElementById("maxNumber").innerText = chosenNumber;
            } else {
                message.textContent =
                    "Try again! The number is not in the range.";
            }
        } else {
            message.textContent = "Try again! The number is bigger.";
            if (chosenNumber > minNumber) {
                minNumber = chosenNumber;
                document.getElementById("minNumber").innerText = chosenNumber;
            } else {
                message.textContent =
                    "Try again! The number is not in the range.";
            }
        }
        document.getElementById("compteur").innerText = compteurDeTour;
    });
}

function gamePlay() {
    proposeNumber();
    askNumber();
}

gamePlay();

