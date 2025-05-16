// 1
function varExample() {
    var x = 10;
    if (true) {
      var x = 20; 
      console.log('var inside if:', x); 
    }
    console.log('var outside if:', x); 
  }
  
// 2

  function letExample() {
    let y = 10;
    if (true) {
      let y = 20; 
      console.log('let inside if:', y); 
    }
    console.log('let outside if:', y); 
  }
// 3
  function constExample() {
    const z = 30;
    console.log('const value:', z);
  }