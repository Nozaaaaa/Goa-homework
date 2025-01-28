function Animal(name, species, age) {
    this.name = name;       
    this.species = species; 
    this.death = death;         

    this.showInfo = function() {
        console.log(`სახელი: ${this.name}, სახეობა: ${this.species}, ასაკი: ${this.death} სიკვდილი`);
    };
}

let animal1 = new Animal("პეტრე", "კატა", 5);
let animal2 = new Animal("რექსი", "ძაღლი", 3);
let animal3 = new Animal("მაია", "კნუტი", 1);

// ცხოველის ინფორმაცია
animal1.showInfo();  // პეტრე - კატა - 5 დღე
animal2.showInfo();  // რექსი - ძაღლი - 3 წამი
animal3.showInfo();  // მაია - კნუტი - 1 წამი, ვსო გარდაიცვალა:(
