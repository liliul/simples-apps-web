class MyClass {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    greet() {
        const conta = this.num1 + this.num2

        console.log(`${conta}`);
    }

    static sayGoodbye() {
        console.log("testando");
    }

    msg(str) {
        console.log("X-MEN");
        console.log(`${str}`);
        
    }
} 


const person = new MyClass(12, 20);

person.greet();

MyClass.sayGoodbye(); 

person.msg('Evolution');




class User {
    // Construtor para inicializar os dados do usuário
    constructor(name, email) {
      this._name = name;
      this.email = email;
      this.createdAt = new Date();
    }
  
    // Getter para obter o nome
    get name() {
      return this._name;
    }
  
    // Setter para alterar o nome
    set name(newName) {
      if (newName.length < 3) {
        console.log('Nome muito curto!');
      } else {
        this._name = newName;
      }
    }
  
    // Método para mostrar informações do usuário
    showInfo() {
      console.log(`Usuário: ${this.name}, Email: ${this.email}, Criado em: ${this.createdAt}`);
    }
  
    // Método estático para verificar a validade do email
    static isValidEmail(email) {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return regex.test(email);
    }
  }
  
  // Classe Admin herda de User
  class Admin extends User {
    constructor(name, email, role = 'admin') {
      super(name, email); // Chama o construtor da classe base
      this.role = role;
    }
  
    // Método para exibir informações completas do administrador
    showAdminInfo() {
      console.log(`Administrador: ${this.name}, Email: ${this.email}, Cargo: ${this.role}, Criado em: ${this.createdAt}`);
    }
  
    // Sobrescrevendo o método showInfo para mostrar algo diferente para Admin
    showInfo() {
      console.log(`Usuário Administrador: ${this.name}, Email: ${this.email}, Cargo: ${this.role}, Criado em: ${this.createdAt}`);
    }
  
    // Método específico de Admin para alterar o cargo
    changeRole(newRole) {
      this.role = newRole;
      console.log(`Cargo alterado para: ${this.role}`);
    }
  }
  
  // Criando uma instância de User
  const user1 = new User('Naruto Uzumaki', 'naruto@example.com');
  user1.showInfo();
  
  // Verificando se o email é válido
  console.log(User.isValidEmail(user1.email)); 
  
  // Criando uma instância de Admin
  const admin1 = new Admin('Som Goku', 'goku@example.com');
  admin1.showAdminInfo(); 
  admin1.showInfo(); 
  
  // Alterando o cargo do Admin
  admin1.changeRole('superadmin');
  
  // Tentando alterar o nome para algo inválido
  user1.name = 'Sasuke'; 
  
  // Alterando o nome de forma válida
  user1.name = 'Vegeta'; 
  user1.showInfo();
  
