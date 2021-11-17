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

// Desafio 10
function techList(array, nome) {
  let techs = [];
  if (array.length === 0) {
    techs = 'Vazio!';
  } else {
    for (let k of array.sort()) { //o sorte aqui é para ordenar o array
      let tec = {};
      tec["tech"]=k;
      tec["name"]=nome;
      techs.push(tec);
    };
  };
  return(techs);
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return("Array com tamanho incorreto.")
  }
  //aqui vou verificar se tem algum número q se repete mais de 3 vezes
  let qRepeticoes = [];
  for (let n of array){
    let cont = 0;
    for (let k of array){
      if (n === k) {
        cont++
      }
    }
    qRepeticoes.push(cont);
  }
  for (let l of qRepeticoes){
    if (l >= 3) {
      return ("não é possível gerar um número de telefone com esses valores")
    }
  }
  //verifiquei até aqui.
  //Agora vou verificar se tem números negativos ou maiores que nove  
  for(let i of array){
    if (i < 0 || i >9 ) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
  }

  //Verifiquei até aqui
  //Se passar por tudo isso então vamos montar o número.
  return('('+ array[0] + array[1] +')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-'  + array[7] + array[8] + array[9] + array[10])
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ( lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineB + lineA ||
  lineA < Math.abs(lineC - lineB) || lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineC - lineA) ||
  lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB) || lineC < Math.abs(lineB - lineA)) {
    return (false)
  } else {
    return(true)
  }
}

// Desafio 13
function hydrate(frase) {
  let cont = 0;
  for (let i = 0; i < frase.length;i++) {
    if(parseInt(frase[i]) > 0){
      cont = cont + parseInt(frase[i])
    }
  }
  if (cont === 1) {
    return (cont + " copo de água")
  } else{
  return(cont + " copos de água")
  }
}