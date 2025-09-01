//primeiro ele irá imprimir o nome carlos poís ele dara prioridade para a variavel dentro do bloco, e depois ele imprimira o nome Ana pois ele irá priorizar a variavel fora global
let nome = "Ana";

function mostrarNome() {
  let nome = "Carlos";
  console.log(nome); // ?
}

mostrarNome();
console.log(nome); // ?
//substituindo o var por let não muda nada.
