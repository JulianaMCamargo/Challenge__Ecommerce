const elementoParaRodape = document.querySelector("[data-rodape]");

function imprimeRodape() {
    elementoParaRodape.innerHTML = 
        `<div class="rodape__informacoes">
        <section class="rodape__menu container">
            <img src="../../assets/img/logo-alurageek.svg" alt="Logo da Alura Geek" class="rodape__menu-logo">
            
            <nav>
                <ul class="rodape__menu-navegacao">
                    <li><a href="#" class="rodape__navegacao-link">Quem somos nós</a></li>
                    <li><a href="#" class="rodape__navegacao-link">Política de privacidade</a></li>
                    <li><a href="#" class="rodape__navegacao-link">Programa fidelidade</a></li>
                    <li><a href="#" class="rodape__navegacao-link">Nossas lojas</a></li>
                    <li><a href="#" class="rodape__navegacao-link">Quero ser franqueado</a></li>
                    <li><a href="#" class="rodape__navegacao-link">Anuncie aqui</a></li>
                </ul>
            </nav>
        </section>
            
        <form class="rodape__formulario container" data-forms-fale-conosco>
            <h7 class="rodape__formulario-titulo">Fale conosco</h7>
            
            <div class="rodape__formulario-nome">
                <label for="nome" >Nome</label>
                <input type="text" id="nome" name="nome" placeholder="André Lisboa" minlength="3" maxlength="40" required>
                <spam class="mensagem-erro"></spam>
            </div>

            <div class="rodape__formulario-mensagem">
                <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem" maxlength="120" required></textarea>
                <spam class="mensagem-erro"></spam>
            </div>
            
            <div>
                <input type="submit" class="rodape__formulario-botao" placeholder="Enviar Mensagem" value="Enviar mensagem">
                <spam class="mensagem-enviada"></spam>
            </div>
        </form>
    </div>

    <section class="desenvolvedor">
        <h8>Desenvolvido por Juliana Camargo</br>2023</h8>
    </section>`
}

imprimeRodape();

