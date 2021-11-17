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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
