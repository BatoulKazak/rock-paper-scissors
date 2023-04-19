const PLAYER = document.querySelector('#player'),
    COMPUTER = document.querySelector('#computer'),
    RESULT = document.querySelector('#result'),
    CHOICE_BTNS = document.querySelectorAll('#choice-btn'),
    START_BUTTON = document.querySelector('#start-button'),
    PARAGRAPH = document.querySelector('#paragraph'),
    BEAUTIFUL_BORDER = document.querySelectorAll('#beautiful-border div'),
    OUTPUT = document.querySelector('#output'),
    DIVS_CONTAINER = document.querySelector('#divs-container'),
    MAIN_CONTAINER = document.querySelector('#main-container'),
    FIRST_AND_LAST_SECTION_DIVS = document.querySelectorAll('#first-section div, #last-section div');

// let player = player.textContent = "";
let player, computer, result;
let playerScores = computerScores = 0;

START_BUTTON.addEventListener('click', () => {
    PARAGRAPH.innerText = `Player: ${playerScores} Computer: ${computerScores}`;

    START_BUTTON.classList.add('hide');
    MAIN_CONTAINER.style.border = "0.5rem groove #f59a7a";
    PARAGRAPH.style.border = "0.5rem groove #f59a7a";
    FIRST_AND_LAST_SECTION_DIVS.forEach(element => {
        element.classList.remove('hide');

    });

    BEAUTIFUL_BORDER.forEach(element => {
        // element.classList.add('hide');
        // for (let i = 0; i < 100; i++) {

        element.classList.add('hide');

        // }
    })

    OUTPUT.classList.remove('hide');
    DIVS_CONTAINER.classList.remove('hide');

});

CHOICE_BTNS.forEach(button => {
    button.addEventListener('click', (e) => {
        player = button.textContent;
        computerTurn();

        PLAYER.textContent = `Player: ${player}`;
        COMPUTER.textContent = `Computer: ${computer}`;
        RESULT.textContent = checkWinner();
        if (RESULT.textContent == "YOU WON") {
            playerScores++;
            PARAGRAPH.innerText = `Player: ${playerScores} Computer: ${computerScores}`;

            // if (playerScores % 5 == 0) {
            //     MAIN_CONTAINER.classList.add('won');
            //     PARAGRAPH.innerText = "WELL DONE!"
            // }
        }
        else {
            computerScores++;
            PARAGRAPH.innerText = `Player: ${playerScores} Computer: ${computerScores}`;
        }
    });
});

function computerTurn() {
    randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1: computer = "rock";
            break;
        case 2: computer = "paper";
            break;
        case 3: computer = "scissors";
            break;
    }

}

function checkWinner() {

    if (computer == player) { return "Draw"; }

    if (computer == "rock") {
        return (player == "scissors") ? "YOU LOSE" : "YOU WON";
    }

    else if (computer == "paper") {
        return (player == "rock") ? "YOU LOSE" : "YOU WON";
    }

    else if (computer == "scissors") {
        return (player == "paper") ? "YOU LOSE" : "YOU WON";
    }

}
