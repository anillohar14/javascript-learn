let randomNumber = parseInt(Math.random() * 100 +1)
 const submit = document.querySelector('#subt')
 const userInput  = document.querySelector('#guessField')
 const previousGuess  = document.querySelector('.guesses')
 const remaining = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')
 const p = document.createElement('p')

 let prevGuess = []
 let numGuess = 1

 let playGame = true

 if(playGame){
   submit.addEventListener('click', function(e){
     e.preventDefault()
     const guess = parseInt(userInput.value)
     validateGuess(guess)
     console.log(guess)
   })
 }

 function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please enter a valid number`)
  }
  else if(guess < 1){
    alert(`Please enter a number greater than 1 `)
  }
  else if(guess > 100){
    alert(`Please enter a number smaller than 100 `)
  }
  else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`GameOver. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
  
    }
  }
 }

 function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You Gussed it right`)
    endGame()
  }  
  else if (guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }
  else if (guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
 }

 function displayGuess(guess){
  userInput.vlaue = ''
  previousGuess.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
 }

 function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
 }
 
 function newGame(){
  const newGameButton = document.querySelector('#NewGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 +1)
    prevGuess = []
    numGuess = 1
    previousGuess.innerHTML = ''
    remaining.innerHTML =`${11 -numGuess }`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
 }

 function endGame(){
  userInput.vlaue = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "NewGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
 }