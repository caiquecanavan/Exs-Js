//acredito que ao rodar o codigo o console irá imprimir o valores 10 e 20 e depois 10 e undefined.
function testeEscopo() {
  var a = 10;
  if (true) {
    let b = 20;
    console.log(a); // ?
    console.log(b); // ?
  }
  console.log(a); // ?
  console.log(b); // ?
}
testeEscopo();
// ao inves de undefined o programa apenas entendeu como um erro
