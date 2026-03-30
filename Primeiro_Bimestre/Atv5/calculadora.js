valorConta = 100;
percentualGorjeta = 15;

gorjeta = valorConta * (percentualGorjeta / 100);

valorTotal = gorjeta + valorConta;

    console.log("Valor da Conta: R$" + valorConta.toFixed(2));
    console.log("Valor da Gorjeta "+ "(" + percentualGorjeta + "%" + ")" +": R$"+ gorjeta.toFixed(2));
    console.log("Valor da total a Pagar: R$" + valorTotal.toFixed(2) + "\n");

const input = require('prompt-sync')();

const entrada = input("Deseja alterar o valor da gorjeta? 1) Sim | 2) Não ---> ");

if(entrada == 1){
    const novovalorgorjeta = Number(input("Informe o valor em decimal. (ex: 10, 20..) ---> "));
    percentualGorjeta = novovalorgorjeta;

    const novovalorconta = Number(input("Informe o valor da nova conta ---> "));
    valorConta = novovalorconta;

    
    gorjeta = valorConta * (percentualGorjeta / 100);
    valorTotal = valorConta + gorjeta;

    console.log("\n");

    console.log("Valor da Conta: R$" + valorConta.toFixed(2));
    console.log("Valor da Gorjeta "+ "(" + percentualGorjeta + "%" + ")" +": R$"+ gorjeta.toFixed(2));
    console.log("Valor da total a Pagar: R$" + valorTotal.toFixed(2) + "\n");
}else{
    console.log("Tu fez coisa errada");
}