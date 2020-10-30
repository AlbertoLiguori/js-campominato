
//Generatore un numero casuale in un determinato intervallo
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

//Funzione comparazione
function isNumberInArray(num,numArray){
  for(var i=0; i < numArray.length;i++){
    if (num===numArray[i]){
      return true
    }
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
  minesArray= arrayGenerator(16, difficulty)
  console.log(minesArray)
}

//Genera bottoni
function htmlElGen(anArray, htmlEl){
  htmlEl.innerHTML=""
  for (i=0; i< anArray.length; i++){
    htmlEl.innerHTML+=`<li> <button onclick="play(this.value)" id="`  +i+ `" value="` + (i+1) + `">` + anArray[i] + `</button> </li>`
  }
}


//Genera il campo minato
function fieldGen(){

  var difficulty = document.getElementById("modeSelection").value
  var inputListArray = arrayGenerator(difficulty, difficulty).sort(function (a, b){
    if (a>b){
      return 1
    }
    else if(a < b){
      return -1
    }
  })


  var lista = document.getElementById("lista")
  htmlElGen(inputListArray, lista)

}
