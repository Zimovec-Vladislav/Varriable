const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

copyOfA.a = 20
copyOfA.b = false
copyOfA.c = 'Hello'

console.log(objectA)