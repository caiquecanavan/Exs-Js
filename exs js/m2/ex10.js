var mensagem = "oi";

function exibirMensagem() {
  let mensagem2 = "olá";
  console.log(mensagem);
  console.log(mensagem2);
}
exibirMensagem();
console.log(mensagem);
console.log(mensagem2);
//o programa consegue ler as variaveis mensagem e mensagem2 dentro do bloco, porém fora dele consegue apenas ler a variavel global que está fora do bloco
