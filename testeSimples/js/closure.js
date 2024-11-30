function contador() {
  let contagem = 0; 

  return {
    incrementar: function() {
      contagem++;
      console.log(contagem);
    },
    decrementar: function() {
      contagem--;
      console.log(contagem);
    }
  };
}

const meuContador = contador();
meuContador.incrementar(); 
meuContador.incrementar();
meuContador.incrementar(); 
meuContador.incrementar(); 
meuContador.incrementar(); 
meuContador.incrementar(); 

meuContador.decrementar();


/**
 * 
 **Closures** em JavaScript são uma característica poderosa e importante que permite que funções "lembrem" e acessem o escopo em que foram criadas, mesmo depois que esse escopo tenha sido finalizado. Vamos explorar o que é um closure, como ele funciona, e exemplos práticos para ajudá-lo a entender.

### O que é um Closure?

Um **closure** é criado quando uma função é definida dentro de outra função, e a função interna "lembra" o escopo da função externa mesmo depois que a execução da função externa tenha terminado.

Em outras palavras, um closure é uma função que **captura o ambiente** (variáveis e parâmetros) da função onde foi criada, e tem acesso a essas variáveis, mesmo após a execução dessa função ter sido concluída.

### Como funciona um Closure?

Quando você cria uma função dentro de outra, a função interna mantém acesso às variáveis da função externa, mesmo depois que a função externa tiver terminado sua execução. Esse comportamento ocorre devido ao **escopo léxico**.

### Exemplo Básico de Closure:

```javascript
function saudacao(nome) {
  let saudacao = "Olá";  // Variável local da função externa

  return function() {  // Função interna
    console.log(saudacao + ", " + nome + "!");
  };
}

const saudacaoCarlos = saudacao("Carlos");
saudacaoCarlos();  // "Olá, Carlos!"
```

#### Explicação:
- A função `saudacao` define uma variável `saudacao` e retorna uma nova função (a função interna).
- A função interna ainda pode acessar a variável `saudacao` e o parâmetro `nome` da função externa (`saudacao`), mesmo depois que a execução de `saudacao` tenha terminado.
- Quando chamamos `saudacaoCarlos()`, a função interna é executada, e ela tem acesso às variáveis da função externa.

### O Escopo Léxico e a Criação do Closure:

O closure se baseia no conceito de **escopo léxico**, o que significa que a função interna lembra de onde ela foi criada, não onde é chamada.

```javascript
function externa() {
  let x = 10;

  return function interna() {
    console.log(x);  // Acessa a variável 'x' da função externa
  };
}

const func = externa();
func();  // 10
```

#### Explicação:
- `externa` define a variável `x` e retorna a função `interna`.
- Mesmo após `externa` ter terminado sua execução, a função `interna` ainda pode acessar `x` devido ao closure.

### Closure e Funcionalidades Avançadas

Closures são frequentemente usados para:

- **Encapsulamento** de dados: Manter variáveis privadas e expor métodos públicos.
- **Funções de retorno (callbacks)**: Funções que são passadas como argumentos e têm acesso ao escopo de onde foram criadas.
- **Contadores e funções que lembram estados**.

#### Exemplo 1: Encapsulamento de dados

Um exemplo comum de closure é criar funções de contagem, onde o valor da variável é privado, mas a função interna pode alterá-lo.

```javascript
function contador() {
  let contagem = 0;  // Variável privada

  return {
    incrementar: function() {
      contagem++;
      console.log(contagem);
    },
    decrementar: function() {
      contagem--;
      console.log(contagem);
    }
  };
}

const meuContador = contador();
meuContador.incrementar();  // 1
meuContador.incrementar();  // 2
meuContador.decrementar();  // 1
```

#### Explicação:
- A variável `contagem` é privada dentro da função `contador`, mas as funções `incrementar` e `decrementar` têm acesso a ela.
- Elas formam um closure, permitindo que o valor de `contagem` seja alterado sem ser acessado diretamente do lado de fora.

#### Exemplo 2: Função de Retorno

Closures também são comuns em funções de retorno, como callbacks e promessas.

```javascript
function saudacao(nome) {
  return function() {
    console.log("Olá, " + nome);
  };
}

setTimeout(saudacao("Maria"), 1000);  // Exibe "Olá, Maria" após 1 segundo
```

#### Explicação:
- Aqui, a função `saudacao` retorna uma função que usa o nome passado como argumento.
- Mesmo depois que a função `saudacao` tenha terminado, a função interna ainda lembra do valor de `nome`.

### Vantagens dos Closures

1. **Encapsulamento de estado:** Você pode criar funções que encapsulam variáveis e comportamentos, evitando que essas variáveis sejam acessadas diretamente fora do seu contexto.
2. **Memorização de dados:** A função interna pode "lembrar" o valor das variáveis, permitindo criar funções com comportamentos dinâmicos baseados no estado local.
3. **Funções de callback:** Closures são úteis quando você passa funções para outros contextos (como timers ou eventos), e essas funções precisam acessar variáveis do contexto original.

### Considerações sobre Closures:

1. **Uso de memória:** Como as funções internas "lembram" do escopo onde foram criadas, elas podem manter referências a variáveis por mais tempo do que o esperado. Isso pode resultar em consumo maior de memória se não for gerenciado corretamente.
2. **Desempenho:** Em alguns casos, se muitas variáveis são capturadas em closures e não liberadas, pode haver impacto no desempenho devido ao uso prolongado de memória.

### Conclusão

Closures são uma das características mais poderosas e versáteis do JavaScript, permitindo que funções lembrem e acessem o escopo onde foram criadas, mesmo depois da execução de sua função original. Isso facilita a criação de funções mais flexíveis e encapsuladas, além de permitir a criação de comportamentos complexos, como funções de contagem e manipulação de dados privados.
 * */