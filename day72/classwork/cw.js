//  1
function Human(name, age, height, ID) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.ID = ID;
  }
  
  const person1 = new Human("valera", 25, 180, 1);
  const person2 = new Human("nugzara", 30, 165, 2);
  const person3 = new Human("vaxtangi", 22, 175, 3);

  console.log(`Name: ${person1.name}, Age: ${person1.age}, Height: ${person1.height}, ID: ${person1.ID}`);
  console.log(`Name: ${person2.name}, Age: ${person2.age}, Height: ${person2.height}, ID: ${person2.ID}`);
  console.log(`Name: ${person3.name}, Age: ${person3.age}, Height: ${person3.height}, ID: ${person3.ID}`);
  
// 2
function Human(name, age, height, ID) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.ID = ID;
  }
  
  function Car(name, releaseYear, engine, horsepower, color, owner) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.engine = engine;
    this.horsepower = horsepower;
    this.color = color;
    this.owner = owner; 
  }
  
  const owner1 = new Human("valera", 25, 180, 1);
  const owner2 = new Human("nugzara", 30, 165, 2);
  const owner3 = new Human("vaxtangi", 22, 175, 3);
  
  const car1 = new Car("Audi A4", 2020, "V6", 300, "Black", owner1);
  const car2 = new Car("BMW X5", 2018, "V8", 400, "White", owner2);
  const car3 = new Car("Mercedes-Benz C-Class", 2022, "Inline-4", 250, "Silver", owner3);
  
  console.log(`Car: ${car1.name}, Release Year: ${car1.releaseYear}, Engine: ${car1.engine}, Horsepower: ${car1.horsepower}, Color: ${car1.color}, Owner: ${car1.owner.name}`);
  console.log(`Car: ${car2.name}, Release Year: ${car2.releaseYear}, Engine: ${car2.engine}, Horsepower: ${car2.horsepower}, Color: ${car2.color}, Owner: ${car2.owner.name}`);
  console.log(`Car: ${car3.name}, Release Year: ${car3.releaseYear}, Engine: ${car3.engine}, Horsepower: ${car3.horsepower}, Color: ${car3.color}, Owner: ${car3.owner.name}`);
  