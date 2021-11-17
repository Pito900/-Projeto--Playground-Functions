// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1 === true && valor2 === true) {
    return (true);
  } else {
    return (false);
  }
}

// Desafio 2
function calcArea(b,a) {
  return ((b*a)/2);
}

// Desafio 3
function splitSentence(frase) {
  return(frase.split(' '));
}

// Desafio 4
function concatName(lista) {
  return (lista[lista.length - 1] + ', ' + lista[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties)
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for (let i of array){
    if (i > maiorNumero) {
      maiorNumero = i;
    };
  };
  let cont = 0;
  for (let j of array) {
    if (j === maiorNumero) {
      cont++;
    };
  };
  return(cont);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse-cat1)**2 > (mouse-cat2)**2){ 
    return ("cat2");
} else if ((mouse-cat2)**2 > (mouse-cat1)**2) {
    return ("cat1");
  } else {
    return ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(array) {
  let nArray = []
  for (let i of array) {
    if( i % 3 === 0 && i % 5 ===0){
      nArray.push("fizzBuzz");
    } else if (i % 5 === 0){
      nArray.push("buzz");
    } else if(i % 3 === 0) {
      nArray.push("fizz");
    } else {
      nArray.push("bug!");
    };
  };
  return (nArray);
}

// Desafio 9
function encode(frase) {
  let nFrase = '';
  for (let k = 0; k < frase.length; k++) {
    if (frase[k] === "a") {
      nFrase += 1;
    } else if (frase[k] === "e") {
      nFrase += 2;
    } else if (frase[k] === "i") {
      nFrase += 3;
    } else if (frase[k] === "o") {
      nFrase += 4;
    } else if (frase[k] === "u") {
      nFrase += 5;
    } else {
      nFrase += frase[k];
    };
  };
  return (nFrase)
}

function decode(nFrase) {
  let frase = '';
  for (let k = 0; k < nFrase.length; k++) {
      if (nFrase[k] === "1") {
        frase += "a";
      } else if (nFrase[k] === "2") {
        frase += "e";
      } else if (nFrase[k] === "3") {
        frase += "i";
      } else if (nFrase[k] === "4") {
        frase += "o";
      } else if (nFrase[k] === "5") {
        frase += "u";
      } else {
        frase += nFrase[k];
      };
    };
  return (frase)
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
