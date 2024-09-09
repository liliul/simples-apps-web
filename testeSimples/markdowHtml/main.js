// Função para salvar o post no localStorage
function savePost(title, content) {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({ title, content });
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Função para exibir os posts
function displayPosts() {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = ''; // Limpa os posts antigos

  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <div>${marked.parse(post.content)}</div>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Event listener para o botão de salvar
document.getElementById('save-post').addEventListener('click', () => {
  const editor = document.getElementById('markdown-editor');
  const title = prompt('Digite o título do post:');
  const content = editor.value;

  if (title && content) {
    savePost(title, content);
    editor.value = ''; // Limpa o editor
    displayPosts(); // Atualiza a lista de posts
    alert('Post salvo com sucesso!'); // Confirmação de sucesso
  } else {
    alert('Título e conteúdo não podem estar vazios.');
  }
});

// Exibe os posts quando a página carrega
window.onload = displayPosts;
