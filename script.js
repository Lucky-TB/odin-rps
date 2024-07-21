function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Normalize choices to lowercase
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
        // Define the outcomes of each possible match-up
        const outcomes = {
            'rock': {
                'rock': 'Draw! Rock ties with Rock.',
                'paper': 'You lose! Paper beats Rock.',
                'scissors': 'You win! Rock beats Scissors.'
            },
            'paper': {
                'rock': 'You win! Paper beats Rock.',
                'paper': 'Draw! Paper ties with Paper.',
                'scissors': 'You lose! Scissors beats Paper.'
            },
            'scissors': {
                'rock': 'You lose! Rock beats Scissors.',
                'paper': 'You win! Scissors beats Paper.',
                'scissors': 'Draw! Scissors ties with Scissors.'
            }
        };
        
        // Determine the outcome
        const result = outcomes[humanChoice][computerChoice];
        
        // Log the result
        console.log(result);
        
        // Update scores based on the result
        if (result.startsWith('You win!')) {
            humanScore++;
        } else if (result.startsWith('You lose!')) {
            computerScore++;
        }
        
        // Log the updated scores
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice(); // Get the human's choice
        const computerChoice = getComputerChoice(); // Get the computer's choice
        playRound(humanChoice, computerChoice); // Play the round
    }

    // Declare the final winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a draw!");
    }
}

// Functions to get choices (assumed to be defined elsewhere in your code)
function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return null; // Return null if the input is invalid
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Start the game
playGame();

