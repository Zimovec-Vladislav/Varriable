const myFunctions = {
    hello: 'Hello, Vladislav',
    myCity() {
        city: 'Your city is Sebastopol',
        console.log('Your city is Sebastopol')
    },
    myLastName() {
        lastName: 'Zimovec',
        console.log('Zimovec')
    },
    sumMyInfo: function () {
        console.log(this.hello + this.myLastName + this.city)
    }
}

myFunctions.sumMyInfo()