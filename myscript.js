var playerSelection;
var computerSelection;
const array1 = ["rock", "paper", "scissors"];
var compScore = 0;
var playerScore = 0;


   //computer returns randomized rock, paper, or scissors
   function computerPlay(){
       computerSelection = (array1[Math.floor(Math.random() * array1.length)]);
       return computerSelection;
   }

   //takes input from player who types in rock, paper, or scissors
//    function playerPlay(){
//        playerSelection = prompt("Rock, Paper, or Scissors?", "");
//        playerSelection = playerSelection.trim();
//        playerSelection = playerSelection.toLowerCase();

//        if (playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper"){
//         return playerSelection;
//        }
//        else{
//            alert("Invalid input, try again!")
//        }
//    }


//UI

const buttons = document.querySelectorAll('input')

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value, computerPlay());
    })
}) 

   // Plays a single round of Rock Paper Scissors + returns a string that declares the winner
   function playRound(playerSelection, computerSelection) {

    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)
    }
    else {
        compScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

        if (compScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
        }
    }

    document.getElementById('result').innerHTML = result
    return
       
        //computerSelection = computerPlay();
        //playerSelection = playerPlay();
        

    //    if (playerSelection === "rock" && computerSelection === "paper"){
    //     alert("You Lose! Paper beats Rock");
    //     compScore += 1;
    //    }
    //    else if (playerSelection === "paper" && computerSelection === "scissors"){
    //     alert("You Lose! Scissors beats Paper");
    //     compScore += 1;
    //    }
    //    else if (playerSelection === "scissors" && computerSelection === "rock"){
    //     alert("You Lose! Rock beats Scissors");
    //     compScore += 1;

    //    }
    //    else if (playerSelection === "rock" && computerSelection === "scissors"){
    //     alert("You Win! Rock beats Scissors");
    //     playerScore += 1;
    //     result = ('You win! ' + playerSelection + ' beats ' + computerSelection
    //          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)
    //    }
    //    else if (playerSelection === "paper" && computerSelection === "rock"){
    //     alert("You Win! Paper beats Rock");
    //     playerScore += 1;
    //     result = ('You win! ' + playerSelection + ' beats ' + computerSelection
    //          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

    //    }else if (playerSelection === "scissors" && computerSelection === "paper"){
    //     alert("You Win! Scissors beats Paper");
    //     playerScore += 1;
    //     result = ('You win! ' + playerSelection + ' beats ' + computerSelection
    //          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)
    //    }
    //    else{
    //        alert("It's a tie");
    //    }
    }

    //game loops 5 times and keeps score + announces winner at the end best out of 5
    // function game(){
    //     for (i = 0; i < 5; i++){
    //         playRound(playerSelection, computerSelection);
    //         console.log(computerSelection);


    //     console.log(playerScore);
    //     console.log(compScore);

    //     }

    //     if(compScore > playerScore){
    //         alert("Computer Won")
    //     }
    //     else if (compScore < playerScore){
    //         alert("You Won!")
    //     }
    //     else{
    //         alert("It's a tie!")
    //     }
    // }


