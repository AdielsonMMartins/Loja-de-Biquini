/*const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = "Olá Mundo";*/
let minhaImagem = document.querySelector('img');
minhaImagem.onmouseenter = function() {
    let meuSrc = minhaImagem.getAttribute('src')
    if(meuSrc === 'imagens/biquini-1.jpeg') {
        minhaImagem.setAttribute ('src', 'imagens/biquini2.jpg');
    } else {
        minhaImagem.setAttribute ('src', 'imagens/biquini-1.jpeg');
    }
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome. ');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
       localStorage.setItem('nome', meuNome);
       meuCabecalho.textContent = 'Biju, ' + meuNome + ' aqui você encontra a sua moda praia!';
    }
} if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = nomeGuardado + ' Apriveite a Biju!';}
    meuBotao.onclick = function() { defineNomeUsuario();
}
