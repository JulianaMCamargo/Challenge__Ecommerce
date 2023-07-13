const elementoParaCabecalho = document.querySelector("[data-cabecalho]");

function imprimeCabecalho() {
    elementoParaCabecalho.innerHTML = 
        `<img src="../assets/img/logo-alurageek.svg" alt="Logo da Alura Geek" class="cabecalho__logo">
        <a href="../paginas/login.html" class="cabecalho__botao-login">Login</a>
        <div class="cabecalho__busca">
            <input type="text" class="cabecalho__busca-input" placeholder="O que deseja encontrar?">
            <img src="../assets/img/busca-icone.svg" alt="Lupa" class="cabecalho__busca-icone">
        </div>`
}

imprimeCabecalho();