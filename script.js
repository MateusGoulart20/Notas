function mostrarConteudo(conteudoId) {
    var conteudoDiv = document.getElementById('conteudo');
    var novoConteudo;

    // Verifica qual conteúdo deve ser exibido com base no ID recebido como parâmetro
    if (conteudoId === 'conteudo1') {
        novoConteudo = '<h2>Conteúdo 1</h2><p>Texto do conteúdo 1...</p>';
    } else if (conteudoId === 'conteudo2') {
        novoConteudo = '<h2>Conteúdo 2</h2><p>Texto do conteúdo 2...</p>';
    } else if (conteudoId === 'conteudo3') {
        novoConteudo = '<h2>Conteúdo 3</h2><p>Texto do conteúdo 3...</p>';
    } else {
        novoConteudo = '<h2>Conteúdo não encontrado</h2>';
    }

    // Substitui o conteúdo da div pelo novo conteúdo
    conteudoDiv.innerHTML = novoConteudo;
}
function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => response.text())
        .then(data => {
            var conteudoDiv = document.getElementById('conteudo');
            conteudoDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o conteúdo:', error);
        });
}
function alterarConteudo(alvo, opcao) {
    var textoElement = document.getElementById(alvo);
    if(opcao == '001') textoElement.textContent = text001;
    if(opcao == '002') textoElement.textContent = text002;
    if(opcao == '003') textoElement.textContent = text003;
}

const text001 = 'texto001'
const text002 = 'texto002'
const text003 = 'texto003'