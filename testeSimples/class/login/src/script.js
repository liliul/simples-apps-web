class Login {
    constructor() {
        // Inicializando os campos do formulário
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        this.form = document.getElementById('form');

        // Dados simulados para validação (exemplo simples)
        this.validUsername = 'naruto';
        this.validPassword = 'sasuke';

        // Registrando o evento de submit no formulário
        this.form.onsubmit = this.handleSubmit.bind(this);
    }

    // Função para validar o login
    validateLogin(username, password) {
        return username === this.validUsername && password === this.validPassword;
    }

    // Função chamada quando o formulário é enviado
    handleSubmit(event) {
        event.preventDefault();  // Impede o envio do formulário

        // Pega os valores dos inputs
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;

        // Valida as credenciais
        if (this.validateLogin(username, password)) {
            alert('Login bem-sucedido!');
            console.log('Usuário:', username);
            console.log('Senha:', password);
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    }
}

// Inicializando a classe Login
const login = new Login();
