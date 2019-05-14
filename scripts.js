let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const currentLeader_p = document.querySelector(".currentLeader > p");

function currentLeader (userScore, computerScore) {
    if (userScore == computerScore) {
        currentLeader_p.innerHTML = "No one is currently winning! Keep playing!";
    } else if (userScore > computerScore) {
        currentLeader_p.innerHTML = "You are in the lead!";
    } else {
        currentLeader_p.innerHTML = "Oh no! The computer is in the lead! Keep playing!";
    }
}

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. You win!`;
    currentLeader(userScore, computerScore);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.toUpperCase()} loses against ${computerChoice.toUpperCase()}. You lost!`;
    currentLeader(userScore, computerScore);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `You both chose ${userChoice.toUpperCase()}! It's a DRAW!`;
    currentLeader(userScore, computerScore);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();