// abstrata
function Animal(raca, idade) {
    this.raca = raca;
    this.idade = idade;
  
    this.emitirSom = function(nome) {
      console.log(`${nome} faz som`);
    }
  }
  
  // herdeiras
  function Cachorro (raca, idade, nome) {
    this.nome = nome;
    Animal.call(this, raca, idade);
      
    this.latir = function(){
        console.log("Au au!")
    }
  }
  
  function Gato (raca, idade, nome) {
    this.nome = nome;
    Animal.call(this, raca, idade);
    
    this.miar = function(){
        console.log("Miau!")
    }
  }
  
  // Criando instâncias de objetos
  const cachorro1 = new Cachorro("Rex", 3, "Labrador");
  const gato1 = new Gato("Whiskers", 2, "Branco");
  const cachorro2 = new Cachorro("Buddy", 5, "Golden Retriever");
  
  // Testando as instâncias
  console.log(cachorro1);
  cachorro1.latir();
  
  console.log(gato1);
  gato1.miar();
  
  console.log(cachorro2);
  cachorro2.latir();
  