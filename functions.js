
//Generatore un numero casuale in un determinato intervallo
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

//Funzione comparazione
function isNumberInArray(num,numArr){
  for(var i=0; i < numArr.length;i++){
    return (num===numArr[i])
  }
}

//Generatore di "elements" numeri casuali in un determinato range
function arrayGenerator(elements, range){
  var numArray=[]
    while (numArray.length < elements){
      var el = randomBetween(0, range)
      if (!(isNumberInArray(el, numArray))){
        numArray.push(el)
      }
    }
  return numArray
}

//Game Initialiser
function initGame(){
  var difficulty = document.getElementById("modeSelection").value;
  stepsToVictory = difficulty - 16;
  fieldArray= arrayGenerator(16, difficulty)
  console.log(fieldArray)

}
