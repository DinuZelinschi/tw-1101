const person = {
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet:function(age){
        console.log(`I am ${age} old`)
    }
}

const person2 = {
    firstName: 'Adrian',
    lastName: 'Maria'
}



// person.fullName.call(person2)
// person.greet.call(person2, 24, 34, 23)
// person.greet.apply(person2, [24, '.'])

const bound = person.greet.bind(person2,24)

bound(24,'.')