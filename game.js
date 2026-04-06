
console.log("O arquivo Js esta conectado e funcionando");

// container opções

const body = document.querySelector("body");

//Events 

//functions menu

function gerColor() {
document.getElementById("button_colors").addEventListener('click', () => {
 document.querySelector(".container_colors").classList.toggle("visibleColors");
 document.querySelector("#button_colors").classList.toggle("button_colors_ex")

})};

function gerMenu() {
 const boxExit = document.querySelector(".box-exit");
 const btnHamb = document.querySelector(".menu-hambur");
 const menu = document.querySelector(".menu");

 function toggleMenu() {
   menu.classList.toggle("menuActive");
   boxExit.classList.toggle("visible");

 }

  function toggleMenuExit() {
   menu.classList.toggle("menuActive");
   boxExit.classList.toggle("visible");
 }


 btnHamb.addEventListener("click", toggleMenu);
 boxExit.addEventListener('click', toggleMenu);

}

function windowCreditos() {
 const btnCreditos = document.getElementById("button-creditos");
 const containerCreditos = document.querySelector(".container-creditos");
 const btnExit = document.getElementById("exit-creditos");

 btnCreditos.addEventListener('click', () => {
  containerCreditos.classList.toggle("visible");
  btnExit.addEventListener('click', () => {
  containerCreditos.classList.remove("visible");
  })
 })
}

function windowComoJogar() {
  const btnComoJogarO = document.getElementById("button-comoJogarO");
  const btnComoJogarI = document.getElementById("button-comoJogarI");
 const containerComoJogar = document.querySelector(".container-comoJogar");
 const btnExit = document.getElementById("exit-comoJogar");

 btnComoJogarI.addEventListener('click', () => {
  containerComoJogar.classList.toggle("visible");
  btnExit.addEventListener('click', () => {
  containerComoJogar.classList.remove("visible");
 })});

 btnComoJogarO.addEventListener('click', () => {
  containerComoJogar.classList.toggle("visible");
  btnExit.addEventListener('click', () => {
  containerComoJogar.classList.remove("visible");
 })});

}


gerColor()
gerMenu()
windowCreditos()
windowComoJogar()



// section inicio

function play () { 
 const btnPlay = document.getElementById("button-jogar");
 const sectionIni = document.querySelector(".section-inicio");
 const sectionCards = document.querySelector(".section-cards");

 btnPlay.addEventListener('click', () => {
 sectionIni.classList.add("invisible");
 sectionCards.classList.add("visible");
 })
}

play()

// section cards

let userCard;

let result;

let arrayResultNumber = [0, 0]

function sairIni() {
  const sectionIni = document.querySelector(".section-inicio");
 const sectionCards = document.querySelector(".section-cards");
 const exit = document.getElementById("exit-cards");

 exit.addEventListener("click" , () => {
 sectionCards.classList.remove("visible");
 sectionIni.classList.remove("invisible");
})
}

sairIni();

function tryAgain() {
 const btnTry = document.getElementById('try-again-result');
 const sectionResult = document.querySelector(".section-result");
 const sectionCards = document.querySelector(".section-cards");

 btnTry.addEventListener('click', () => {
  sectionResult.classList.toggle("visible");
  sectionCards.classList.toggle("visible")
 })

}

function exitIni() {
   const sectionResult = document.querySelector(".section-result");
   const sectionInicio = document.querySelector(".section-inicio");
   const exit = document.getElementById("exit-result");

   exit.addEventListener("click", () => {
    sectionResult.classList.remove("visible");
    sectionInicio.classList.toggle("visible");
   })
}

function game(userChoice) {
 const computerNumber = Math.floor((Math.random() * 3) + 1);

 let computerChoice;

 switch(computerNumber) {
  case 1: computerChoice = "pedra"; console.log(computerChoice); break;
  case 2: computerChoice = "papel"; break;
  default: computerChoice = "tesoura";
 };

 function resultGame(user, computer, result, array) {
  const textResult = document.querySelector(".title-result");

  switch(result) {
    case "empate": textResult.textContent = "Houve um Empate!"; textResult.style.color = "yellow"; break;
    case "ganhou": textResult.textContent = "Você Ganhou!"; textResult.style.color = "limegreen"; break;
    default: textResult.textContent = "Você Perdeu!"; textResult.style.color = "red";
  }

  const containerImagesResult = document.querySelector(".container-result");
  const imagesResult = containerImagesResult.querySelectorAll("img");
  console.log(imagesResult)

  imagesResult.forEach((image , index) => {
    let controler;
    index === 0 ? controler = "u" : controler = 'c';
    
   if (controler === "u") {
    switch(user) {
      case "pedra": image.src = "assets/pedra.png"; break;
      case "papel": image.src = "assets/papel.png"; break;
      default: image.src = "assets/tesoura.png";
    }
  } else {
    switch(computer) {
      case "pedra": image.src = "assets/pedra.png"; break;
      case "papel": image.src = "assets/papel.png"; break;
      default: image.src = "assets/tesoura.png";
    };
  };

  });
  


 };





 if (userChoice === computerChoice) {
  result = "empate";
  resultGame(userChoice, computerChoice, result, arrayResultNumber);
 } else if (((userChoice === "pedra") && (computerChoice === "tesoura")) 
  || ((userChoice === "tesoura") && (computerChoice === "papel")) 
  || ((userChoice === "papel") && (computerChoice === "pedra"))) {
   result = "ganhou";
   arrayResultNumber[0]++;
  resultGame(userChoice, computerChoice, result, arrayResultNumber);
  }
  else {
   result = "perdeu";
   arrayResultNumber[1]++;
   resultGame(userChoice, computerChoice, result, arrayResultNumber);
  }
}


function cards() {
 const cards = document.querySelectorAll(".card-section");

 cards.forEach((card, index) => card.addEventListener("click" , () => {
 switch(index) {
  case 0: userCard = "pedra"; break;
  case 1: userCard = "papel"; break;
  default: userCard = "tesoura";
 }

 const sectionCards = document.querySelector(".section-cards");
 sectionCards.classList.remove("visible");
 const sectionResult0 = document.querySelector('.section-result');
 sectionResult0.classList.add('visible')

 game(userCard);
 }))
}

cards();

exitIni()

tryAgain()