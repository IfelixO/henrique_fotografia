// Botões de mostrar mais
const botaoPri = document.getElementById('botao-primeiro')
const botaoSeg = document.getElementById('botao-segundo')
// blocos de cartões
const blocosSeg = document.getElementById('blocos-segundo')
const blocosTer = document.getElementById('blocos-terceiro')
// Botão Serviços na navegação do cabeçallho
const servicos = document.getElementById('servicos')
// Botões de navegação interna da página
const botaoCasamentos = document.getElementById('casamentos')
const botaoPrewed = document.getElementById('prewed')
const botaoGestantes = document.getElementById('gestantes')
const botaoEnsaios = document.getElementById('ensaios')
const botaoEventos = document.getElementById('eventos')
// Blocos de cartões específicos
const blocoTodos = document.getElementById('servicos-todos')
const blocoCasamentos = document.getElementById('servicos-casamentos')
const blocoPrewed = document.getElementById('servicos-prewed')
const blocoGestantes = document.getElementById('servicos-gestantes')
const blocoEnsaios = document.getElementById('servicos-ensaios')
const blocoEventos = document.getElementById('servicos-eventos')
// cabeçalho
const cabecalhoBotao = document.getElementById('cabecalho-botao')
const cabecalhoNav = document.getElementById('cabecalho-nav')
const linha1 = document.getElementById('linha1')
const linha2 = document.getElementById('linha2')
const linha3 = document.getElementById('linha3')

// Funções para mostrar mais blocos
function mostrarPri () {
    blocosSeg.style.display = "flex";
    console.log('segundo saindo');
    botaoPri.style.display = 'none';
    botaoSeg.style.display = 'block';
}
function mostrarSeg () {
    blocosTer.style.display = 'flex';
    console.log('terceiro saindo');
    botaoSeg.style.display = 'none';
}
//cabeçalho
function mostrarNav () {
    cabecalhoNav.style.marginRight = 0
    console.log('mostrou')
    cabecalhoBotao.addEventListener ('click', esconderNav )
    cabecalhoBotao.removeEventListener ('click', mostrarNav )
    linha1.setAttribute('class', 'linhaX1')
    linha2.setAttribute('class', 'linhaX2')
    linha3.setAttribute('class', 'linhaX3')

}
function esconderNav () {
    cabecalhoNav.style.marginRight = ('-100%')
    console.log ('escondeu')
    cabecalhoBotao.addEventListener ('click', mostrarNav )
    cabecalhoBotao.removeEventListener ('click', esconderNav )
    linha1.setAttribute('class', 'linha1')
    linha2.setAttribute('class', 'linha2')
    linha3.setAttribute('class', 'linha3')
}


// Funções para filtrar tipos de ensaios
function mostrarCasamentos () {
    blocoTodos.style.display = 'none';
    blocoCasamentos.style.display = 'block';
    blocoPrewed.style.display = 'none';
    blocoGestantes.style.display = 'none';
    blocoEnsaios.style.display = 'none';
    blocoEventos.style.display = 'none';
    botaoCasamentos.setAttribute('class', 'barra-nav-atual');
    botaoPrewed.setAttribute('class', 'conteudo-barra-nav-item');
    botaoGestantes.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEnsaios.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEventos.setAttribute('class', 'conteudo-barra-nav-item');
    console.log('casamentos');
}
function mostrarPrewed () {
    blocoTodos.style.display = 'none';
    blocoCasamentos.style.display = 'none';
    blocoPrewed.style.display = 'block';
    blocoGestantes.style.display = 'none';
    blocoEnsaios.style.display = 'none';
    blocoEventos.style.display = 'none';
    botaoCasamentos.setAttribute('class', 'conteudo-barra-nav-item');
    botaoPrewed.setAttribute('class', 'barra-nav-atual');
    botaoGestantes.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEnsaios.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEventos.setAttribute('class', 'conteudo-barra-nav-item');
    console.log('Prewed');
}
function mostrarGestantes () {
    blocoTodos.style.display = 'none';
    blocoCasamentos.style.display = 'none';
    blocoPrewed.style.display = 'none';
    blocoGestantes.style.display = 'block';
    blocoEnsaios.style.display = 'none';
    blocoEventos.style.display = 'none';
    botaoCasamentos.setAttribute('class', 'conteudo-barra-nav-item');
    botaoPrewed.setAttribute('class', 'conteudo-barra-nav-item');
    botaoGestantes.setAttribute('class', 'barra-nav-atual');
    botaoEnsaios.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEventos.setAttribute('class', 'conteudo-barra-nav-item');
    console.log('Gestantes');
}
function mostrarEnsaios () {
    blocoTodos.style.display = 'none';
    blocoCasamentos.style.display = 'none';
    blocoPrewed.style.display = 'none';
    blocoGestantes.style.display = 'none';
    blocoEnsaios.style.display = 'block';
    blocoEventos.style.display = 'none';
    botaoCasamentos.setAttribute('class', 'conteudo-barra-nav-item');
    botaoPrewed.setAttribute('class', 'conteudo-barra-nav-item');
    botaoGestantes.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEnsaios.setAttribute('class', 'barra-nav-atual');
    botaoEventos.setAttribute('class', 'conteudo-barra-nav-item');
    console.log('Ensaios');
}
function mostrarEventos () {
    blocoTodos.style.display = 'none';
    blocoCasamentos.style.display = 'none';
    blocoPrewed.style.display = 'none';
    blocoGestantes.style.display = 'none';
    blocoEnsaios.style.display = 'none';
    blocoEventos.style.display = 'block';
    botaoCasamentos.setAttribute('class', 'conteudo-barra-nav-item');
    botaoPrewed.setAttribute('class', 'conteudo-barra-nav-item');
    botaoGestantes.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEnsaios.setAttribute('class', 'conteudo-barra-nav-item');
    botaoEventos.setAttribute('class', 'barra-nav-atual');
    console.log('Eventos');
}

// Check
console.log('rodou')

// Pinta o Botão Serviços na navegação do cabeçallho
servicos.setAttribute('class', 'nav-atual')

//cabeçalho
cabecalhoBotao.addEventListener ('click', mostrarNav )

// Ações dos botões de filtro
botaoCasamentos.onclick = mostrarCasamentos
botaoPrewed.onclick = mostrarPrewed
botaoGestantes.onclick = mostrarGestantes
botaoEnsaios.onclick = mostrarEnsaios
botaoEventos.onclick = mostrarEventos

//Ações dos botões de mostrar mais
botaoPri.onclick = mostrarPri 
botaoSeg.onclick = mostrarSeg 









