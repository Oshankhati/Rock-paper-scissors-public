let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() => {
    const options = ["rock", "paper", "scirrors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was a draw. Play Again!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You won");
        msg.innerText = "You Won! Play Again! "; 
        msg.style.backgroundColor = "green";
    } else {
        compScore ++;
        compScorePara.innerText = compScore;
        console.log ("You lost");
        msg.innerText = "You Lost! Play Again!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userId) => {
    console.log("User Choice = ",userId);
    // Generate Computer Choice --> modular
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice); 

    if (userId == compChoice) {
        drawGame ();
    } else {
        let userWin = true; 
        if (userId ==="rock") {
            // scirrors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userId ==="paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userId, compChoice);

    }
};

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        const userId = choice.getAttribute("id");
       playGame(userId);
    });
});