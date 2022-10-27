let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById('textOutput');
let userNumberUpdate = document.getElementById('inputBox');
let audio = new Audio("./audio/1.wav");


const init = () =>{
    // use for randam number
    // if we write Math.floor() then show only integer numbres before decimal value
    computerGuess = Math.floor(Math.random() *20);// multiply by 100 krne se jo nmber hoga wah ab 0 to 100 ke bich ka hi milega
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display= "none";
    document.getElementById("gameArea").style.display = "none";
};

// call init()  function automatically when load our html page so we can see html page inside body
//  onlaod ="init()"





const startGame = () =>{
    document.getElementById('welcomescreen').style.display = "none";
    document.getElementById('gameArea').style.display ="block";
};

  // Relodad page
  const newGameBegin = () =>{
    window.location.reload();
    audio.play();
  }


// startNewGame function
const startNewGame = () =>{
    document.getElementById("newGameButton").style.display= "inline";
    userNumberUpdate.setAttribute("disabled" , true);
}



//main logic

const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById('inputBox').value);
    userGuess = [ ... userGuess, userNumber];
    document.getElementById('guesses').innerHTML = userGuess;

    
    if(userGuess.length < maxGuess)
    {   
        // check the value  low or heigh
        if(userNumber > computerGuess)
        {
          // your guess word ki jgh mere dwara diye gye nmessage  ko show kra do
           userGuessUpdate.innerHTML = " Your guess is High 😮 ";
           userNumberUpdate.value = " ";
        }
        else if(userNumber < computerGuess)
        {
           userGuessUpdate.innerHTML = " Your guess is Low 😓 ";    
             userNumberUpdate.value = " ";
        }
        else
        {
           userGuessUpdate.innerHTML = "It's Correct 😄";
           userNumberUpdate.value = " "; 
           startNewGame();
        }
    }
    else
    {
        // check the value  low or heigh
        if(userNumber > computerGuess)
        {
          // your guess word ki jgh mere dwara diye gye nmessage  ko show kra do
           userGuessUpdate.innerHTML = `You Loose !! correct number was ${computerGuess}`;
           userNumberUpdate.value = " ";
           startNewGame();
        }
        else if(userNumber < computerGuess)
        {
           userGuessUpdate.innerHTML =`You Loose !! correct number was ${computerGuess}`;
           userNumberUpdate.value = " ";
           startNewGame();
        } 
        else
        {
           userGuessUpdate.innerHTML = "It's Correct 😄";
           userNumberUpdate.value = " "; 
           startNewGame();
        }
    }

    // Number of previous attempts
    document.getElementById('attempts').innerHTML = userGuess.length;
};






/*--------------------start CALL easyMode FUNCTION--------------------------------- */
const easyMode = () =>{
    audio.play();
    maxGuess = 10;
    startGame();  // game area ko show krane ke liye ak  function ko call kiya
};
/*---------------end  CALL easyMode FUNCTION--------------------------------- */


/*--------------------CALL hardMode function------------------------------------- */
const hardMode = () =>{
    audio.play();
    maxGuess = 5;
    startGame();//
};





























