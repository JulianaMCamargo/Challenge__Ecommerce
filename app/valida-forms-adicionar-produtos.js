const camposDoFormulario = document.querySelectorAll("[required]");
const formularioAdicionaProduto = document.querySelector("[data-forms-adicionar-produto]");

formularioAdicionaProduto.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "imagem": e.target.elements["imagem"].value,
        "categotia": e.target.elements["categoria"].value,
        "nome": e.target.elements["nome"].value,
        "preco": e.target.elements["preco"].value,
        "descricao": e.target.elements["descricao"].value
    }

    //window.location.href = "../paginas/produto-adicionado.html";
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
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
    imagem: {
        valueMissing: "Este campo não pode estar vazio.",
        typeMismatch: "O formato do campo não é válido.",
        //customError: "O formato da imagem não é válido."
    },

    categoria: {
        valueMissing: "Este campo não pode estar vazio."
    },

    nome: {
        valueMissing: "Este campo não pode estar vazio."
    },

    preco: {
        valueMissing: "Este campo não pode estar vazio."//se eu conseguir digitar além de numero add um typeMismatch
    },

    descricao: {
        valueMissing: "Este campo não pode estar vazio."
    }
}


function verificaCampo(campo){
    let mensagem = " ";
    
    tiposDeErros.forEach(erro => {
        if (campo.validity[erro]){
            mensagem = mensagens [campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;   
    } else {
        mensagemErro.textContent = "";
    }
}