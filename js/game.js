// const grid = document.querySelector('.grid');
// const spanPlayer = document.querySelector('.player');
// const timer = document.querySelector('.timer');

// const characters = [
//   'beth',
//   'jerry',
//   'jessica',
//   'morty',
//   'pessoa-passaro',
//   'pickle-rick',
//   'rick',
//   'summer',
//   'meeseeks',
//   'scroopy',
// ];

// const createElement = (tag, className) => {
//   const element = document.createElement(tag);
//   element.className = className;
//   return element;
// }

// let firstCard = '';
// let secondCard = '';

// const checkEndGame = () => {
//   const disabledCards = document.querySelectorAll('.disabled-card');

//   if (disabledCards.length === 20) {
//     clearInterval(this.loop);
//     alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
//   }
// }

// const checkCards = () => {
//   const firstCharacter = firstCard.getAttribute('data-character');
//   const secondCharacter = secondCard.getAttribute('data-character');

//   if (firstCharacter === secondCharacter) {

//     firstCard.firstChild.classList.add('disabled-card');
//     secondCard.firstChild.classList.add('disabled-card');

//     firstCard = '';
//     secondCard = '';

//     checkEndGame();

//   } else {
//     setTimeout(() => {

//       firstCard.classList.remove('reveal-card');
//       secondCard.classList.remove('reveal-card');

//       firstCard = '';
//       secondCard = '';

//     }, 500);
//   }

// }

// const revealCard = ({ target }) => {

//   if (target.parentNode.className.includes('reveal-card')) {
//     return;
//   }

//   if (firstCard === '') {

//     target.parentNode.classList.add('reveal-card');
//     firstCard = target.parentNode;

//   } else if (secondCard === '') {

//     target.parentNode.classList.add('reveal-card');
//     secondCard = target.parentNode;

//     checkCards();

//   }  
// }

// const createCard = (character) => {

//   const card = createElement('div', 'card');
//   const front = createElement('div', 'face front');
//   const back = createElement('div', 'face back');

//   front.style.backgroundImage = `url('../images/${character}.png')`;

//   card.appendChild(front);
//   card.appendChild(back);

//   card.addEventListener('click', revealCard);
//   card.setAttribute('data-character', character)

//   return card;
// }

// const loadGame = () => {
//   const duplicateCharacters = [ ...characters, ...characters ];

//   const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

//   shuffledArray.forEach((character) => {
//     const card = createCard(character);
//     grid.appendChild(card);
//   });
// }

// const startTimer = () => {

//   this.loop = setInterval(() => {
//     const currentTime = +timer.innerHTML;
//     timer.innerHTML = currentTime + 1;
//   }, 1000);

// }

// window.onload = () => {
//   spanPlayer.innerHTML = localStorage.getItem('player');
//   startTimer();
//   loadGame();
// }




/**
 * consttruir uma estrutura html com as respectivas classes 
 * criar uma funcao para criar uma carta, com arrow function
 * criar todas as divs grid, card, face, front, back
 * variavel.classname = nome da classe
 * colocar as tags dentro da pagina
 * otimizar cirando uma segunda funcao recebendo parâmetro para criaçao de elemento ficando mais dinâmico. 
 * 
 */

const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const spanTimer = document.querySelector(".timer");
/**
 * criar um array guardando os nomes das imagens que vao no front da carta
 * criar uma funcao para percorrer um array 
 * adicionar cada carta criada ao grid
 * passar cada personagem do front a funcao de criação de carta e nela adicionar o personagem a div front
 * duplicar o array [...array_aqui, ...array_aqui] 
 * forEach agora percorre array duplicado
 * embaralhar as cartas com sort. Sort recebe uma funcao sort(()=> Math.random() - 0.5)
 * forEach percorre array embaralhado
 * 
 */

/**
 * adicionar um event na criacao da carta, evento na carta
 * criar a funcao do evento separado
 * adicionar a classe reveal-card na carta 
 * criar condicional para ver se a carta já está virada 
 * criar variaveis fora da funcao para identificar primeira e segunda carta clicada
 * condicional para ver se primeira e segunda carta foram clicadas
 * usar o target.parentNode
 * apos clicar na segunda carta, chamar função para checar se as cartas são iguais.
 * na criação da carta criar um dataSet para a carta com o nome de cada personagem
 */


/**  checar o fim do jogo
 * No checkCards apos acertar a dupla de cartas, chamr func para checar o fim do jogo
 * verificar a quantidade de elementos com cartas desabilitadas
 * criar condicional para verificar quantas cartas foram salvas 
 */



const characters = [
    "beth",
    "jerry",
    "jessica",
    "meeseeks",
    "pessoa-passaro",
    "morty",
    "pickle-rick",
    "scroopy",
    "rick"
]

const createElement = (tag, classElement)=>{
    const element = document.createElement(tag);
    element.className = classElement;
    return element;
}



let firstCard = "";
let secondCard = "";

const checkEndGame = ()=>{
    const disabledCardsArray = document.querySelectorAll(".disabled-card");    
    console.log(disabledCardsArray.length)
    if (disabledCardsArray.length === 18){
        clearInterval(this.loop);
        alert("Parabéns você venceu");
        
    }
}

const checkCards = ()=>{
    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");
    
    if (firstCharacter === secondCharacter){
        
       firstCard.firstChild.classList.add("disabled-card");
       secondCard.firstChild.classList.add("disabled-card");
      
        firstCard = "";
        secondCard = "";

        checkEndGame();
       
    }else {
        setTimeout(()=>{
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = "";
            secondCard = "";    

        }, 500)
    }
    
}



const revealCard = ({ target }) => {

      if (target.parentNode.className.includes('reveal-card')) {
        return;
      }
    
      if (firstCard === '') {
    
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    
      } else if (secondCard === '') {
    
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
    
        checkCards();
    
      } 
    }

 



const createCard = (character)=>{
    const card = createElement("div", "card");
    const front = createElement("div", "front face");
    const back = createElement("div", "back face");

   

    front.style.backgroundImage = `url(../images/${character}.png)`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard)
    card.setAttribute("data-character", character)
    

    return card;

}



const loadGame = ()=>{

    // duplicar o array [...array_aqui, ...array_aqui] 
    const duplicadedCharacters = [...characters, ...characters]; 

    // embaralhar as cartas com sort. Sort recebe uma funcao sort(()=> Math.random() - 0.5)
    const shuffledArray = duplicadedCharacters.sort(()=>Math.random() - 0.5);
    shuffledArray.forEach((character) => {
        // * criar variaveis fora da funcao para identificar primeira e segunda carta clicada
        const card = createCard(character);


    // adicionar cada carta criada ao grid
        grid.appendChild(card);


    });
}

/** logica timer
 * pegar o span do timer
 * criar a funcão com loop onde a cada segundo será incrementado mais segundos
 * pegar o tempo que já está no span que é 0 zero 
 * converter para numero
 * criar um set interval para o tempo
 * iniciar o timer no onload
 *parar o loop quando o usuario vencer
 atribuir o timer ao this. this.loop = setInterval..
 parar o loop quando o jogo acabar com clear interval
 */


 const startTimer = ()=>{
    
    this.loop = setInterval(()=>{
        const timer = +spanTimer.innerHTML;
        spanTimer.innerHTML = timer + 1;
    },1000);
 }


window.onload = ()=> {
    //recuperar o valor do localStorage 
    // localStorage.getItem("valor do input")
    //colocar na tela 
    spanPlayer.innerHTML = localStorage.getItem("player");
    startTimer();
    loadGame();
    
}
