const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-forms-fale-conosco]');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "mensagem": e.target.elements["mensagem"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));//aqui não estou enviando para nenhuma API
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));//quando tirar o foco do campo vai chamar a função de verificar
    campo.addEventListener("invalid", evento => evento.preventDefault())//não vai mostrar as mensagens automáticas caso algum campo esteja inválido
})

const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'tooLong',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
        tooLong: "O campo de mensagem deve conter no máximo 40 caracteres."
    },
    mensagem: {
        valueMissing: 'O campo da mensagem não deve ficar em branco ou vazio.',
        patternMismatch: "Por favor, preencha uma mensagem válida.",
        tooLong: "O campo de mensagem deve conter no máximo 120 caracteres."
    }
}

function verificaCampo(campo){
    let mensagem = " ";

    tiposDeErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro'); //o parentNode serve para que busque só a class que ta no input do escopo da função
    const mensagemEnviada = campo.parentNode.querySelector('.mensagem-enviada');
    const validadorDoInput = campo.checkValidity(); //checar se está valido ou não
    
    if (!validadorDoInput) {//se a validação for falsa vai retornar a mensagem do erro
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = " ";
        mensagemEnviada.textContent = "Sua mensagem foi enviada!";

    }
}