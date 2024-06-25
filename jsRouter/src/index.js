window.document.querySelector('body').innerHTML = `
    <nav>
      <ul>
        <li><a href="#home" class="text-white">Home</a></li>
        <li><a href="#about" class="text-white">About</a></li>
        <li><a href="#contact" class="text-white">Contact</a></li>
        <li><a href="#rote" class="text-white">Roteamento</a></li>
      </ul>
    </nav>

    <hr>

    <section id="root"></section>
`;


// Função para carregar conteúdo da página com base no hash da URL
function loadContent() {
    const hash = window.location.hash.substring(1); // Remove o caractere "#" da URL

    // Define o conteúdo com base no hash da URL
    let content;
    switch (hash) {
        case 'home':
            content = '<h2>Home Page</h2><p>Bem-vindo à página inicial.</p>';
            break;
        case 'about':
            content = '<h2>About Page</h2><p>Saiba mais sobre nós.</p>';
            break;
        case 'contact':
            content = '<h2>Contact Page</h2><p>Entre em contato conosco.</p>';
            break;
        case 'rote':
            content = '<h2 class="text-orange-500">Router: </h2><p class="text-blue-400">Testando Reteamento com javascript puro</p>';
            break;
        default:
            content = '<h2>Página não encontrada</h2><p>A página solicitada não existe.</p>';
    }

    // Atualiza o conteúdo da página dinamicamente
    const mainContent = document.getElementById('root');
    mainContent.innerHTML = content;
}

// Função para configurar o roteamento e lidar com cliques nos links
function setupRouter() {
    // Carrega o conteúdo da página inicial ao carregar a página
    loadContent();

    // Adiciona um manipulador de evento para lidar com cliques nos links de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão de navegação

            // Atualiza a URL do navegador sem recarregar a página
            const hash = this.getAttribute('href').substring(1); // Obtém o hash da URL
            history.pushState(null, null, `#${hash}`);

            // Carrega o conteúdo da página correspondente ao hash
            loadContent();
        });
    });

    // Manipulador de evento para o botão "Voltar" do navegador
    window.onpopstate = function () {
        loadContent();
    };
}

// Inicia o roteamento quando o documento HTML estiver totalmente carregado
document.addEventListener('DOMContentLoaded', setupRouter);
