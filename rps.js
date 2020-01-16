
//We will first implement a function that generates a choice for the computer, and will
//then compare it to that of the user. The users choice will be found through element id from the html.
//In order to compare the results, we will have to make a funciton "compare" which will establish and respond with
//the winner. This compare function will be below the play function.


//this is where we will find the computers choice and compare it to the users.
var game_result;
var game_score = 0;
function play(userChoice){
    var compChoice;
    compChoice = getRandomInt(0,3); //0 will be Rock, 1 will be Paper, 2 will be Scissors
    game_result = compare (userChoice, compChoice)
    var result_message = document.getElementById('results');
    var score = document.getElementById('score');
    if (game_result == 0){
        result_message.innerHTML= "You Lose!"
    }
    else if (game_result == 1){
        result_message.innerHTML= "You Win!"
        game_score++;
        score.innerHTML= game_score;
    }
    else if (game_result == 2){
        result_message.innerHTML= "DRAW! Play Again!"
    }
}



//this is where we decalre how to compare the choices based on the basic rules of RPS.
//think about how a player wins/loses. What is the logic? View the flowchart for reference. 
var compare = function(choice1, choice2){
    if (choice2 == choice1){ //If the user and computer choose the same thing
        return 2; //Draw
    }
    else if (choice1 == 0 && choice2 == 1){ //User chooses Rock, Computer chooses Paper
        return 0; //User Loses
    }
    else if (choice1 == 0 && choice2 == 2){ //User chooses Rock, Computer chooses Scissors
        return 1; //User Wins
    }
    else if (choice1 == 1 && choice2 == 0){ //User chooses Paper, Computer chooses Rock
        return 1;
    }
    else if (choice1 == 1 && choice2 == 2){ //User chooses Paper, Computer chooses Scissors
        return 0;
    }
    else if (choice1 == 2 && choice2 == 0){ //User chooses Scissors, Computer chooses Rock
        return 0;
    }
    else if (choice1 == 2 && choice2 == 1){ //User chooses Scissors, Computer chooses Paper
        return 1;
    }
}

//Math.Random example from MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
  