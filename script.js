const miniMenu = document.getElementById('mini_menu');
const header = document.querySelector('header');

// Função para verificar se a largura da tela é menor ou igual a 480px
function isSmallScreen() {
  return window.innerWidth <= 480;
}

// Função para ajustar a visibilidade com base na largura da tela
function adjustMenuVisibility() {
  if (isSmallScreen()) {
    miniMenu.style.display = 'block'; // Exibir o mini_menu em telas pequenas
    header.style.display = 'none'; // Ocultar o header inicialmente
  } else {
    miniMenu.style.display = 'none'; // Ocultar o mini_menu em telas maiores
    header.style.display = 'flex'; // Garantir que o header esteja visível
  }
}

// Evento de clique no mini_menu
miniMenu.addEventListener('click', (event) => {
  if (isSmallScreen()) {
    header.style.display = 'block'; // Mostra o header
    miniMenu.style.display = 'none'; // Esconde o mini-menu
    event.stopPropagation(); // Impede que o clique se propague para o document
  }
});

// Evento de clique no documento
document.addEventListener('click', (event) => {
  if (isSmallScreen() && !header.contains(event.target) && event.target !== miniMenu) {
    header.style.display = 'none'; // Esconde o header
    miniMenu.style.display = 'block'; // Mostra o mini-menu novamente
  }
});

// Evento de redimensionamento da janela
window.addEventListener('resize', adjustMenuVisibility);

// Ajustar a visibilidade inicial com base na largura da tela
adjustMenuVisibility();
