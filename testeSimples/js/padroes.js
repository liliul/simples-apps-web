// Factory
function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        falar() {
            console.log(`Olá, sou ${nome}`);
        }
    };
}
const res = new criarPessoa('Naruto', 22)
res.falar()

// Singleton
const Singleton = (function () {
    let instancia;

    function criarInstancia() {
        return { nome: "Única Instância" };
    }

    return {
        getInstancia() {
            if (!instancia) instancia = criarInstancia();
            return instancia;
        }
    };
})();
