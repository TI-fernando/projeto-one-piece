// Objetivo 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado.

// Passo 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.

const botoes = document.querySelectorAll(".botao");

// Passo 2 - Adicionar a classe 'selecionado' no botão que e o usuário clicou.

// Passo 3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.

// Objetivo 2 - Quando clicar no botão do personagem, mostrar as informações do personagem.

// Passo 1 - Pegar os personagens no JS para poder mostrar ou  esconder eles.

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Este e o passo 3...
    desselecionarBotao();

    // Objetivo 2 - Passo 3...
    desselecionarPersonagem();

    // Este e o passo 2...
    botao.classList.add("selecionado");

    // Objetivo 2 - Passo 2....
    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
