
const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    //Play Match
    const playMatch = () => {
    const options = document.querySelectorAll(".buttons button");
    const playerHand = document.querySelector(".user-hand");
    const computerHand = document.querySelector(".expert-hand");
    const computerOptions = ["ROCK", "PAPER", "SCISSOR"];
    options.forEach(option => {
    option.addEventListener("click", function() {
    
    //Computer Choice
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    
    compareHands(this.textContent, computerChoice);
    //Update Images.
    playerHand.src = `./${this.textContent}.jpg`;
    computerHand.src = `./${computerChoice}.jpg`;
    //Animation
    // playerHand.style.animation = "shakePlayer 2s ease";
    //computerHand.style.animation = "shakeComputer 2s ease";
    });
    });
    };
    const updateScore = () => {
    const playerScore = document.querySelector(".user p");
    const computerScore = document.querySelector(".expert p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    };
    const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    //const winner = document.querySelector(".winner");
    //Checking for a tie
    if(pScore===10)
    {
        Swal.fire({title:'You WIN :)',allowOutsideClick: false,allowEscapeKey:false,icon: 'success', background: 'white'}).then(function() {window.location = "index1.html";});
        
    }
    
    if(cScore===10)
    {
        Swal.fire({title:'You Lost :(',allowOutsideClick: false,allowEscapeKey:false,icon: 'error', background: 'white'}).then(function() {window.location = "index1.html";});
    }
    if (playerChoice === computerChoice) {
        updateScore();
        // alert("It is a tie");
        return;
    }
    //Check for Rock
    if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSOR") {
        pScore++;
        updateScore();
        // alert("user wins");
    
    return;
    } else {
        cScore++;
        updateScore();
        // alert("exert wins");
    
    return;
    }
    }
    //Check for Paper
    
    if (playerChoice === "PAPER") {
    if (computerChoice === "SCISSOR") {
        cScore++;
        updateScore();
        // alert("expert wins");
        return;
    } else {
        pScore++;
        updateScore();
        // alert("user wins");
    }
    }
    //Check for Scissors
    if (playerChoice === "SCISSOR") {
    if (computerChoice === "ROCK") {
        cScore++;
        updateScore();
        // alert("expert wins");
   
    return;
    } else {
    pScore++;
    updateScore();
    // alert("user wins");
    return;
    }
    }
    
    
    };
    //Is call all the inner function
    //startGame();
    playMatch();
    };
    
    //start the game function
    game();