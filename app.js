//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();

  if (!nome) {
    alert('Digite um nome válido.');
    return;
  }

  if (listaDeNomes.includes(nome)) {
    alert('Esse nome já foi adicionado.');
    return;
  }

  listaDeNomes.push(nome);
  input.value = '';
  mostrarLista();
}

function mostrarLista() {
  document.getElementById('lista-amigos').textContent = listaDeNomes.join(', ');
}


