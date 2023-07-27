const elementoParaCabecalho = document.querySelector("[data-cabecalho]");

function imprimeCabecalho() {
    elementoParaCabecalho.innerHTML = 
        `<a href="../index.html"><img src="../assets/img/logo-alurageek.svg" alt="Logo da Alura Geek" class="cabecalho__logo"></a>
        <a href="../paginas/login.html" class="cabecalho__botao-login">Login</a>
        <a href="#" class="cabecalho__botao-menu-admin">Menu Administrador</a>
        <div class="cabecalho__busca">
            <input type="search" class="cabecalho__busca-input" placeholder="O que deseja encontrar?" data-campo-pesquisa>
            <a href="#" data-botao-pesquisa><img src="../assets/img/busca-icone.svg" alt="Lupa" class="cabecalho__busca-icone"></a>
        </div>`
}

imprimeCabecalho();