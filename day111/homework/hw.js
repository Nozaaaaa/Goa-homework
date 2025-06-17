// task 1:

let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let [firstColor, secondColor, ...otherColors] = colors;

// task 2:

let person = {
    name: 'Dave',
    age: 34,
    country: 'United states of America'
}

let {name, age, country} = person;

// task 3:

let book = {
    title: 'Hello, world!',
    author: 'Shio'
}

let {title: bookTitle, author: bookAuthor} = book;

// task 4:

let person1 = {
  name: 'Nika',
  age: 41,
  address: {
    city: 'Tbilisi',
    zip: '0105'
  }
};

let { address: {city}} = person;
