
//Generatore un numero casuale in un determinato intervallo
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

//Generatore di 16 numeri casuale in un determinato range

function arrayGenerator(range){

  var numArray=[]

  for(i = 0; i < 16; i++){
    var el = randomBetween(0, range)
    if (!(numArray.includes(el))){
      numArray.push(el)
    }else{
      i--;
    }
  }
  console.log(numArray)
  return numArray
}
