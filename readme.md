INTRODUCTION
The rock, paper, and scissors game involves two players making a rock, paper, or scissors.There are only two possible outcomes: a draw or a win for one player and a loss for the other.I'd be building the game using JavaScript where a player would be playing against the computer. In total, there'd be 10 moves.The player has to choose one option among the rock, paper, and scissors at a time and a random option would be generated from the computer’s side. The one who wins will get one point every time. After the 10 moves are over, the final result will be displayed on the screen with a button to restart the game. The game will be completely responsive so that it can be played on every device.

PROCESS OF THE GAME:

==>HTML Layout:

HTML defines the basic structure of the game as well as any website layout.And I'll be saving this in an html file named "index.html". 
The style.css file is linked in the head tag which will be used for styling the HTML.

Below is a description of the elements used in code:

-A div with the class title is used to display the title on the screen.
-A div with a class score contains two more div which will display the score of the player and bot.
-Div with the class move just displays a text and div with class movesleft will show the number of moves left before the game ends.
-A div with a class option contains three button rock, paper, and scissors which the user can use to give the input.
-A div with the class result will display the result of every move and the final result after 10 moves and the button with class reload will allow reloading the game.

==> CSS Styling:
I used css for styling.

==> LOGIC OF THE GAME:
The main logic of the game is created by using JavaScript. We will be performing DOM manipulation.
!
!
PSUEDO-CODING:
=>First of I create a function called game() that will contain all the logic of the game.
=>Inside the function  declare three variables playerScore, computerScore, moves which will keep the record of the player’s score, bot’s score, and moves completed respectively.
=> I create another function called playGame(). Inside the function, I used DOM manipulation to get hold of all the three buttons in HTML for player input. And then Create an array called playerOptions which will contain all three buttons as its elements. An do the same for bot options create an array.
=> Next step, use forEach() loop on playerOptions so that I can use an event listener on all buttons. Inside the loop increment moves counter by 1 display moves left on the screen by subtracting moves from 10. Generate a random value for the bot option and compare it with the player’s input.
=>Create a function winner() which will receive two arguments one the player’s input and the other the bot’s option  The function will decide who wins the point among the player and computer.
=>Create another function gameOver() which will display the final result with reload button. The function will be called when moves will become equals to 10.
Call the playGame() function inside the game() function.
Now call the game() function at the end of the file.