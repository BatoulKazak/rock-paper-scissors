const PLAYER = document.querySelector('#player'),
    COMPUTER = document.querySelector('#computer'),
    RESULT = document.querySelector('#result'),
    CHOICE_BTNS = document.querySelectorAll('#choice-btn');

let player, computer, result;

CHOICE_BTNS.forEach(button =>
    button.addEventListener('click', () => {
        player = button.textContent;
        computerTurn();

        PLAYER.textContent = `Player: ${player}`;
        COMPUTER.textContent = `Computer : ${computer}`;
        RESULT.textContent = checkWinner();


    }));


function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "DRAW!";
    }
    else if (computer == "rock") {
        return (player == "paper") ? "YOU WIN" : "YOU LOSE";
    }
    else if (computer == "paper") {
        return (player == "scissor") ? "YOU WIN" : "YOU LOSE";
    }
    else if (computer == "scissor") {
        return (player == "rock") ? "YOU WIN" : "YOU LOSE";
    }
}