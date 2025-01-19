//  1
let car = {
    make: 'mercedes',      
    model: '211 k5,5',    
    year: 1989,          
    color: 'black',       
    owner: 'Nozadze giorgi'    
  };
  
  console.log(car.model);

//  2
let numbers = {
    "row 0": [2, 4, 6, 8, 10], 
    "row 1": [1, 3, 5, 7, 9]   
  };
  
  for (let i = 0; i < numbers["row 0"].length; i++) {
    console.log(`Even: ${numbers["row 0"][i]}, Odd: ${numbers["row 1"][i]}`);
  }
  
