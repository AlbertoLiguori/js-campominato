
// OK // Il computer deve generare 16 numeri casuali tra 1 e 100.
// OK I numeri non possono essere duplicati

// OK In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// OK L'utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//Dichiarazione delle variabili
var minesArray=arrayGenerator(16, 100);
console.log(minesArray)
var scoreCounter=0;




// Seleziona la difficoltà e Gioca
document.getElementById("modeSelection").addEventListener("change", function(){

  initGame()
  fieldGen()

})

//Inizializza una nuova giocata con la difficoltà selezionata in precedenza
document.getElementById("newGame").addEventListener("click", function(){

  initGame()
  fieldGen()

})

function play(stepOnField){

  stepOnField = parseInt(stepOnField)

  console.log(stepOnField)

  if (!(minesArray.includes(stepOnField))){
    minesArray.push(stepOnField)
    scoreCounter++;
    document.getElementById("message").innerHTML="continua così!";
    document.getElementById("yourSteps").innerHTML+="<li>"+stepOnField+"</li>";
    document.getElementById("score").innerHTML="Punteggio:" + scoreCounter
  } else{
    scoreCounter= 0;
    document.getElementById("yourSteps").innerHTML="";
    document.getElementById("message").innerHTML="ka-boom";
    document.getElementById("score").innerHTML="Punteggio:" + scoreCounter;
    fieldArray=[];
  }

  console.log(minesArray)

}

fieldGen()
