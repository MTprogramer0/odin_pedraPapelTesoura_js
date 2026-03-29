console.log("O arquivo Js esta conectado e funcionando");

const valuePerson = () => String(prompt("Digite Pedra Papel ou Tesoura").toLowerCase());

const game = () => {

const randomNumber = Math.floor(Math.random() * 3) + 1;
const valuePer = valuePerson();

if ((valuePer ==! "tesoura") || (valuePer ==! "papel") || (valuePer ==! "pedra")) { 
    alert("Você digitou um valor diferente de pedra, papel ou tesoura!!!");
     return game();
};

 let compValue;

 switch (randomNumber) {
 case 1: compValue = "tesoura"; break;
 case 2: compValue = "pedra"; break;
 case 3: compValue = "papel"; break;
 };

 if (((valuePer === "tesoura") && (compValue === "tesoura")) || ((valuePer === "pedra") && (compValue === "pedra")) || ((valuePer === "papel") && (compValue === "papel"))) {
 console.log(`Você: ${valuePer};`);
 console.log(`Computador: ${compValue};`);
 console.log(`Resultado: Está empatado;`);
 } else if (((valuePer === "tesoura") && (compValue === "papel")) || ((valuePer === "papel") && (compValue === "pedra")) || ((valuePer === "pedra") && (compValue === "tesoura"))) {
 console.log(`Você: ${valuePer};`);
 console.log(`Computador: ${compValue};`);
 console.log(`Resultado: Você ganhou;`);
 } else {
 console.log(`Você: ${valuePer};`);
 console.log(`Computador: ${compValue};`);
 console.log(`Resultado: Você perdeu;`);
 };
};

game()