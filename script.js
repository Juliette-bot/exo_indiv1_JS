let firstname = "Beyonce"
let message = "Bonjour !"+ firstname
console.log(message)

function sayHello(firstname,hour){

    if ([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].includes(hour)) {
    return `Bonjour, ${firstname} !`
}

       if ([18, 19, 20, 21].includes(hour)) {
    return `Bonsoir, ${firstname} !`

}

    
       if ([22, 23, 24, 1, 2, 3, 4, 5, 6].includes(hour)) {
    return `Bonne nuit, ${firstname} !`
}

console.log()

}
console.log(sayHello(firstname,20))
console.log(sayHello(firstname,2))
console.log(sayHello(firstname,10))


