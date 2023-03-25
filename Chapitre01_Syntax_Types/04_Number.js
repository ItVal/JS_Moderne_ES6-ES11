//Type number
let nombreEntier = 10;
let nombreDecimal = 10.78;
console.log(nombreDecimal);
console.log(typeof nombreEntier);

//concatenation de deux variable du type number
console.log(nombreEntier + " , " + nombreDecimal);

//addition
let total = nombreEntier + nombreDecimal;
total += 5
console.log(total);

//soustraction
let soustraction = nombreDecimal - nombreEntier;
soustraction -= 1
console.log(soustraction);

//division
const a = 2;
let division = nombreDecimal / a;
console.log(division);

//multiplication
let multiplication = nombreEntier * nombreDecimal;
console.log(multiplication);

//puissance
let puissance = nombreEntier ** 2;
console.log(puissance);

//incrementation et decrementation
nombreEntier++;
console.log(nombreEntier);
nombreEntier--;
console.log(nombreEntier);

//NaN : is not a number
let isNaN = 'val nas ' / nombreEntier ;
console.log(isNaN);

//concatenation entre string et variable
let myConcatenation = "hello, je suis un nombre, " + nombreEntier;
console.log(myConcatenation);
