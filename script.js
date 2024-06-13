class Animal {
	constructor(species){
		this.species=species;
	}
	get getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
}
  constructor(species) {
    this._species = species;
  }

class Dog extends Animal {
	purr(){
		console.log("purr");
	}
  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}

class Cat extends Animal {
	bark(){
		console.log("woof")
	}
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const animal = new Animal("Unknown");
console.log(animal.species); 
animal.makeSound(); 

const cat = new Cat("Cat");
console.log(cat.species); 
cat.makeSound(); 
cat.purr();

const dog = new Dog("Dog");
console.log(dog.species); 
dog.makeSound(); 
dog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
window.Cat = Cat;
