const people = [
    {
      name: "giorgi",
      age: 15,
      height: 173,
      gender: "male"
    },
    {
      name: "ana",
      age: 30,
      height: 165,
      gender: "famale"
    },
    {
      name: "salome",
      age: 22,
      height: 170,
      gender: "famale"
    },
    {
      name: "daviti",
      age: 40,
      height: 175,
      gender: "male"
    }
  ];
 
  people.forEach(person => {
    console.log(`-->) person:`);
    console.log(`name: ${person.name},`);
    console.log(`age: ${person.age},`);
    console.log(`height: ${person.height},`);
    console.log(`gender: ${person.gender}`);
    console.log('---');
  });
  