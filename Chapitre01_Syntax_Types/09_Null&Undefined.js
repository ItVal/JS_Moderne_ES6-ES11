//Null & Undefined

//Null : un variable déclaré avec une valeur null
let myNull = null;
console.log(myNull); //null

//Undefined : un variable utilisé mais sans être initialisé
let myUndefined;
console.log(myUndefined); //undefined

//si on essaie d'utiliser ce variable alors qu'on l'a pas initialisé, nous aurons comme msg "NaN" is not a number.
console.log(myUndefined + 10); //NaN