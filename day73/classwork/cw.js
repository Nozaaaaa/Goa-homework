function Bank(owner, balance) {
    this.owner = owner;  
    this.balance = balance; 

    // 1. შეტანა 
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount; 
        } else {
            console.log("გთხოვთ, დადებითი თანხა ჩარიცხოთ");
        }
    };

    // 2. გამოტანა 
    this.withdraw = function(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount; 
        } else {
            console.log("არასაკმარისი თანხა ან ცუდი თანხა");
        }
    };

    // 3. თანხის ჩვენება 
    this.showBalance = function() {
        console.log(`${this.owner}: ${this.balance} ლარი`);
    };
}

let account1 = new Bank("ნუგზარა", 1000);
let account2 = new Bank("ვალერა", 1500);

account1.deposit(500);    // +500 ლარი ნუგზარას ანგარიშზე
account1.withdraw(200);   // -200 ლარი ნუგზარას ანგარიშიდან
account1.showBalance();   // ნუგზარასა დარჩა

account2.deposit(300);    // +300 ლარი ვალერას ანგარიშზე
account2.withdraw(1000);  // -1000 ლარი ვალერას ანგარიშიდან
account2.showBalance();   // ვალერასა დარჩა
