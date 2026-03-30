valorConta = 100;
percentualGorjeta = 15;

gorjeta = valorConta * (percentualGorjeta / 100);



valorTotal = gorjeta + valorConta;

console.log("Valor da Conta: R$" + valorConta.toFixed(2));
console.log("Valor da Gorjeta "+ "(" + percentualGorjeta + "%" + ")" +": R$"+ gorjeta.toFixed(2));
console.log("Valor Total a Pagar: R$"+valorTotal.toFixed(2));