//variable de type boulean nous permet de faire la manipulation de vrai ou faux

console.log(true, false);

//méthode pouvant nous retourner un boulean
let adressMail = "valnas@gmail.com";

//vérifions si sur cette adresse on y trouve @
console.log(adressMail.includes("@")); //sortie true
console.log(adressMail.includes("x")); //sortie false

//manipulation des opérateurs de comparaison 
const age = 28
let nomV = 'Nas'

//égalité
console.log(age == 28);// true
//différent
console.log(age != 28); //false
//superiorité 
console.log(age > 28);//false
//superieur ou egal
console.log(age >= 28); //true
//infériorité
console.log(age < 28); //false
//inferieur ou egal
console.log(age <= 28); //true

//comparaison non strict peut nous trompé en js (deux signes d'égalité)
console.log(age == '28'); //true or ça number 28 est différent du string '28'

//comparaison strict peut nous trompé en js (trois signes d'égalité)
console.log(age === '28'); //false maintenant c'est okay

