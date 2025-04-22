function andar(objeto) {
    if (typeof objeto.mover === 'function') {
      objeto.mover()
    } else {
      console.log("Este objeto não sabe como se mover.")
    }
  }
  
  const carro = {
    mover: function() {
      console.log("Carro está andando.")
    }
  }
  
  const pessoa = {
    mover: function() {
      console.log("Pessoa está caminhando.")
    }
  }
  
  const livro = {
    abrir: function() {
      console.log("Livro foi aberto.");
    }
  }
  
  andar(carro)
  andar(pessoa)  
  andar(livro)   