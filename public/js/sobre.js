// Botão Sobre na navegação
const sobre = document.getElementById('sobre')
//cabeçalho
const cabecalhoBotao = document.getElementById('cabecalho-botao')
const cabecalhoNav = document.getElementById('cabecalho-nav')
const linha1 = document.getElementById('linha1')
const linha2 = document.getElementById('linha2')
const linha3 = document.getElementById('linha3')


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



cabecalhoBotao.addEventListener ('click', mostrarNav )

// Pinta o Botão Sobre na navegação
sobre.setAttribute('class', 'nav-atual')