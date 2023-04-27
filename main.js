const person = {
    name: 'Bob',
    age: 21
}

const person2 = JSON.parse(JSON.stringify(person))

person2.age = 26
person2.isAdult = true

console.log(person.name)
console.log(person.age)
console.log(person.isAdult)
console.log(person2.name)
console.log(person2.age)
console.log(person2.isAdult)