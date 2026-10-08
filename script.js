const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.textContent = "Bem-vinda ao Girly Girls! 🎀";
});

const botaoCurtir = document.getElementById("curtir");
const contador = document.getElementById("contador");

let curtidas = 0;

botaoCurtir.addEventListener("click", function() {
    curtidas++;

    contador.textContent = curtidas + " curtidas";
});