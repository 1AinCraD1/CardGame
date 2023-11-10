const generateButton = document.getElementById("generate");
const resetScoreButton = document.getElementById("reset-score");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultMessageElement = document.getElementById("result-message");
const playerCardContainer = document.getElementById("player-card-container");
const computerCardContainer = document.getElementById("computer-card-container");

let playerName = "Player 1";

const enteredName = prompt("Enter player name:");
if (enteredName) {
    playerName = enteredName;
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

function drawCard(player) {
    const cards = [
        { name: "Card6", value: 6, image: "pictures/6.png", alt: "Card6" },
        { name: "Card7", value: 7, image: "pictures/7.png", alt: "Card7" },
        { name: "Card8", value: 8, image: "pictures/8.png", alt: "Card8" },
        { name: "Card9", value: 9, image: "pictures/9.png", alt: "Card9" },
        { name: "Card10", value: 10, image: "pictures/10.png", alt: "Card10" },
        { name: "CardJack", value: 2, image: "pictures/Jack.png", alt: "CardJack" },
        { name: "CardQueen", value: 3, image: "pictures/Queen.png", alt: "CardQueen" },
        { name: "CardKing", value: 4, image: "pictures/King.png", alt: "CardKing" },
        { name: "CardAce", value: 11, image: "pictures/Ace.png", alt: "CardAce" }
    ];

    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];

    const cardImage = document.createElement("img");
    cardImage.src = card.image;
    cardImage.alt = card.alt;
	cardImage.classList.add("card-image");

    const cardContainer = player === "player" ? playerCardContainer : computerCardContainer;
    cardContainer.innerHTML = '';
    cardContainer.appendChild(cardImage);

    if (player === "player") {
        playerScore += card.value;
    } else {
        computerScore += card.value;
    }

    updateScores();
}

function updateScores() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

generateButton.addEventListener("click", function() {
    if (round < 3) {
        drawCard("player");
        drawCard("computer");

        round++;

        if (round === 3) {
            if (playerScore > computerScore) {
                resultMessageElement.textContent = `${playerName} переміг з результатом ${playerScore}:${computerScore}!`;
            } else if (playerScore < computerScore) {
                resultMessageElement.textContent = `Комп'ютер переміг з результатом ${playerScore}:${computerScore}!`;
            } else {
                resultMessageElement.textContent = `Нічия! Результат ${playerScore}:${computerScore}.`;
            }
        }
    }
});

resetScoreButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    playerCardContainer.innerHTML = '';
    computerCardContainer.innerHTML = '';

    updateScores();
    resultMessageElement.textContent = "";
});
