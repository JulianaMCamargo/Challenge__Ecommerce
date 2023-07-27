const camposDoFormulario = document.querySelectorAll("[required]")
const formularioLogin = document.querySelector("[data-formulario-login]");

formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "email": e.target.elements["email"].value,
        "senha": e.target.elements["senha"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));//aqui não estou enviando para nenhuma API

    window.location.href = "../paginas/todos-os-produtos.html";
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
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "O formato do e-mail não é válido.",
        tooShort: "Por favor, preencha um email válido.",
        customError: "O formato do e-mail não é válido."
    },

    senha: {
        valueMissing: 'O campo da senha não deve ficar em branco ou vazio.'
    }
}

function validaPonto(campo) {
    const pontoFinal = ".com";
    return campo.value.endsWith(pontoFinal);//verifica se a substring ".com" está no final da string
  }

function ehUmEmail(campo){
    if (!validaPonto(campo)){
        campo.setCustomValidity('O formato do e-mail não é válido.');
    }
}

function verificaCampo(campo){
    let mensagem = " ";
    campo.setCustomValidity('');
    if (campo.name == "email") {
        ehUmEmail(campo)
    }
    tiposDeErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(erro);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro'); //o parentNode serve para que busque só a class que ta no input do escopo da função
    const validadorDoInput = campo.checkValidity(); //checar se está valido ou não
    
    if (!validadorDoInput) {//se a validação for falsa vai retornar a mensagem do erro
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = " ";

    }
}