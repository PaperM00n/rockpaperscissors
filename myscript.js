var playerSelection;
var computerSelection;
const array1 = ["rock", "paper", "scissors"];
var compScore = 0;
var playerScore = 0;


   //computer returns rock, paper, or scissors
   function computerPlay(){
       computerSelection = (array1[Math.floor(Math.random() * array1.length)]);
       return computerSelection;
   }

   //takes input from player who types in rock, paper, or scissors
   function playerPlay(){
       playerSelection = prompt("Rock, Paper, or Scissors?", "");
       playerSelection = playerSelection.trim();
       playerSelection = playerSelection.toLowerCase();

       if (playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper"){
        return playerSelection;
       }
       else{
           alert("Invalid input, try again!")
       }
   }

   // Plays a single round of Rock Paper Scissors + returns a string that declares the winner
   function playRound(playerSelection, computerSelection) {
       
        computerSelection = computerPlay();
        playerSelection = playerPlay();

       if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You Lose! Paper beats Rock");
        compScore += 1;
       }
       else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert("You Lose! Scissors beats Paper");
        compScore += 1;
       }
       else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert("You Lose! Rock beats Scissors");
        compScore += 1;

       }
       else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert("You Win! Rock beats Scissors");
        playerScore += 1;
       }
       else if (playerSelection === "paper" && computerSelection === "rock"){
        alert("You Win! Paper beats Rock");
        playerScore += 1;

       }else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert("You Win! Scissors beats Paper");
        playerScore += 1;
       }
       else{
           alert("It's a tie");
       }
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


        console.log(game());