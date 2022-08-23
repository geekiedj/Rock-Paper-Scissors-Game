// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let botScore = 0;
    let moves = 0;

    // another function to hold the three buttons that will be using to play game.
    // I'd be grabbing this by using the document query 
    //selector and saving those buttons in a variable bucket, naming them rockBtn,paperBtn,scissorBtn.
    // Thereafter, those three variables would be saved 
    //in a bigger bucket holding all three and named playerOptions listed in array form whilst the other would be computerOption.
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const botOptions = ['rock','paper','scissors']
        //I'd be using forEach loopUse forEach()loop on playerOptions so that I can add an event listener on all buttons with a single piece of code.
        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
               // Inside the loop increment moves counter, I decide to target the moves left in the html tag by using document.queryselector in order to display moves player have left on the screen by subtracting moves from 10.
               const movesLeft = document.querySelector('.movesleft');
               moves++;
               movesLeft.innerText = `Moves Left: ${10-moves}`;

               const choiceNumber = Math.floor(Math.random()*3);
               const botChoice = botOptions[choiceNumber];
               // Function to check who wins
               winner(this.innerText,botChoice)
                 
               // Calling gameOver function after 10 moves
               if(moves === 10){
                   gameOver(playerOptions,movesLeft);
               }
            })
        })
        
    }
     // created another function to decide the winner
     const winner = (player,bot) => {
        const result = document.querySelector('.result');//targeting the result board in the html
        const playerScoreBoard = document.querySelector('.p-count');
        const botScoreBoard = document.querySelector('.b-count');
        player = player.toLowerCase();
        bot = bot.toLowerCase();
        if(player === bot){
            result.textContent = 'Tie I see you!'
        }
        else if(player === 'rock'){
            if(bot === 'paper'){
                result.textContent = 'Bot Won....They are taking over!';
                botScore++;
                botScoreBoard.textContent = botScore;
 
            }else{
                result.textContent = 'Yes you won...doing it for humans around the world!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player === 'scissors'){
            if(bot === 'rock'){
                result.textContent = 'Bot Won....They are taking over!';
                botScore++;
                botScoreBoard.textContent = botScore;
            }else{
                result.textContent = 'Yes you won... doing it for humans around the world!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player === 'paper' ){
            if(bot === 'scissors'){
                result.textContent = 'Bot Won....They are taking over!';
                botScore++;
                botScoreBoard.textContent = botScore;
            }else{
                result.textContent = 'Yes you won...doing it for humans around the world!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
//This Function is for when the game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > botScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game...you taking over!'
            result.style.color = '#308D46';
        }
        else if(playerScore < botScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Damn!!!! You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie! you can do better!!!';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();