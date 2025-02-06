//  1
function BankAccount(owner, balance) {
    this.owner = owner;    
    this.balance = balance; 
  
    // თანხის შეტანა
    this.deposit = function(amount) {
      this.balance += amount;
      console.log(`შეთანაგებული თანხა: ${amount} | ახალი ბალანსი: ${this.balance}`);
    };
  
    // თანხის გამოტანა
    this.withdraw = function(amount) {
      if (amount > this.balance) {
        console.log("არ საკმარისია თანხა");
      } else {
        this.balance -= amount;
        console.log(`გამოტანილი თანხა: ${amount} | დარჩენილი ბალანსი: ${this.balance}`);
      }
    };
  
    // ბალანსის ჩვენება
    this.displayBalance = function() {
      console.log(`მფლობელი: ${this.owner} | ბალანსი: ${this.balance}`);
    };
  }
  
  // გამოყენება
  const account = new BankAccount("ლაშა ლომიძე", 1000);
  account.deposit(500);   // თანხის შეტანა
  account.withdraw(200);  // თანხის გამოტანა
  account.displayBalance(); // ბალანსის ჩვენება

// 2
function Animal(name, species, age) {
    this.name = name;     
    this.species = species; 
    this.age = age;        
  
    // ცხოველის ინფორმაციის ჩვენება
    this.displayInfo = function() {
      console.log(`ცხოველი: ${this.name} | სახეობა: ${this.species} | ასაკი: ${this.age}`);
    };
  }
  
  // გამოყენება
  const dog = new Animal("ბაჯი", "ყავარი", 3);
  dog.displayInfo(); // ცხოველის ინფორმაციის ჩვენება
  
  