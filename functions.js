
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
  fieldArray= arrayGenerator(16, difficulty)
  console.log(fieldArray)

}

// //Genera bottoni
// function htmlElGen(anArray, htmlEl){
//   for (i=0; i< anArray.length; i++){
//     htmlEl.innerHTML+=`<li> <button onclick="document.getElementById('step').value=this.value" id="`  +i+ `" value="` + i + `">` + anArray[i] + `</button> </li>`
//   }
// }



// //Genera bottoni
// function htmlElGen(anArray, htmlEl){
//   for (i=0; i< anArray.length; i++){
//     htmlEl.innerHTML+=`<li> <button onclick="document.getElementById('step').value=this.value" id="`  +i+ `" value="` + i + `">` + anArray[i] + `</button> </li>`
//   }
// }

//Genera bottoni
function htmlElGen(anArray, htmlEl){
  for (i=0; i< anArray.length; i++){
    htmlEl.innerHTML+=`<li> <button onclick="play(this.value)" id="`  +i+ `" value="` + i + `">` + anArray[i] + `</button> </li>`
  }
}



function play(stepOnField){

  stepOnField = parseInt(stepOnField)

  console.log(stepOnField)

  if (!(fieldArray.includes(stepOnField))){
    fieldArray.push(stepOnField)
    scoreCounter++;
    stepsToVictory--;
    document.getElementById("message").innerHTML="continua così!";
    document.getElementById("yourSteps").innerHTML+="<li>"+stepOnField+"</li>";
    document.getElementById("stepsToVictory").innerHTML="Ti mancano " + stepsToVictory + " passi alla vittoria";
    document.getElementById("score").innerHTML="Punteggio:" + scoreCounter
  } else{
    scoreCounter= 0;
    document.getElementById("yourSteps").innerHTML="";
    document.getElementById("message").innerHTML="ka-boom";
    document.getElementById("score").innerHTML="Punteggio:" + scoreCounter;
    fieldArray=[];
  }

  console.log(fieldArray)

}


// //Genera bottoni
// function htmlElGen(anArray, htmlEl){
//   for (i=0; i< anArray.length; i++){
//     htmlEl.innerHTML+=`<li> <button onclick="play(this.value)" id="`  +i+ `" value="` + i + `">` + anArray[i] + `</button> </li>`
//   }
// }
