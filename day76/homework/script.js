function createObject(keys, values) {
    if (keys.length !== values.length) {
        return "Keys and values arrays must have the same length";
    }

    let result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }

    return result;
}

const keys = ["name", "age", "city"];
const values = ["John", 30, "New York"];

const obj = createObject(keys, values);
console.log(obj);  // {"name": "John", "age": 30, "city": "New York"}
