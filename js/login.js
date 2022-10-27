// const input = document.querySelector('.login__input');
// const button = document.querySelector('.login__button');
// const form = document.querySelector('.login-form');

// const validateInput = ({ target }) => {
//   if (target.value.length > 2) {
//     button.removeAttribute('disabled');
//     return;
//   }

//   button.setAttribute('disabled', '');
// }

// const handleSubmit = (event) => {
//   event.preventDefault();
  
//   localStorage.setItem('player', input.value);
//   window.location = 'pages/game.html';
// }

// input.addEventListener('input', validateInput);
// form.addEventListener('submit', handleSubmit);

/*
pegar o botao
pegar o input
adicionar um evento para o input (input event)
atribuir uma funcao do evento a uma variável
ver se foi digitado uma palavra com mais de 3 letras
USAR OBJECT DESTRUCTOR PARA PEAGR O TARGET:
    CONST VARIAVEL = ({TARGET})=>{}
caso atenda a condição, desabilitar o botao. se não
habilita novamente:
    removeAttibutte()
    setAttribute(atributo, valor caso exista)
*/

const loginButton = document.querySelector(".login-button");
const loginInput = document.querySelector(".login-input");

// desabilita/habilita botão
const validaInput = ({target})=>{
    if(target.value.length > 2){
        loginButton.removeAttribute("disabled");
        return;
    }
    loginButton.setAttribute("disabled", "");

}

loginInput.addEventListener("input", validaInput);

/**
 * pegar o formulario
 * adicionar um evento no formulario (submit)
 * adiconar uma variavel a funcao do evento
 * prevenir o comportamento de envio de formulario dentro da função
 * salvar o valor digitado no localStorage:
    localStorage.setItem('player', input.value)
 *redirecioinar o jogador para a pagina do jogo:
    window.location = 'pages/game.html';
 * 
 */