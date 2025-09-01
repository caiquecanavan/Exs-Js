//primeiro ele ira imprimir 30 pois ele da prioridade ao valor dentro do bloco, e depois 25 pois é a variavel global.
let idade = 25;

if (true) {
  var idade = 30;
  console.log("Dentro do bloco:", idade); // ?
}

console.log("Fora do bloco:", idade); // ?
//após alterar let idade = 30; para var idade = 30; o codigo da erro pois da conflito entre a variavel let idade = 25 que está fora do bloco e a variavel var idade = 30 que é uma variavel global.
